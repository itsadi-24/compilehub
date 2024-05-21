import { Loader2, Save, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from '@/redux/slices/compilerSlice';
import { RootState } from '@/redux/store';
import { handleError } from '@/utils/handleError';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const handleSaveCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/compiler/save', {
        fullCode: fullCode,
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <div className='flex items-center justify-between h-12 p-2 text-white bg-black __header_helper'>
      <div className='flex gap-1 __btn_container'>
        <Button
          onClick={handleSaveCode}
          className='flex items-center justify-center gap-1 bg-green-500 hover:bg-green-700'
          variant='outline'
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              <Loader2 className=' animate-spin' /> Saving
            </>
          ) : (
            'Save'
          )}
          <Save size={16} />
        </Button>
        <Button
          className='flex items-center justify-center gap-1'
          variant='secondary'
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>
      <div className='flex items-center justify-center gap-1 __tab_switcher'>
        <p>Language:</p>

        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType['currentLanguage']
              )
            )
          }
        >
          <SelectTrigger className='w-[180px] bg-gray-800 outline-none focus:ring-0'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='html'>HTML</SelectItem>
            <SelectItem value='css'>CSS</SelectItem>
            <SelectItem value='javascript'>JAVASCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
