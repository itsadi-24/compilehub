import { Save, Share2 } from 'lucide-react';
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

export default function HelperHeader() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <div className='__header_helper h-12 bg-black text-white p-2 flex justify-between items-center'>
      <div className='__btn_container flex gap-1'>
        <Button
          className='flex justify-center items-center gap-1 bg-green-500 hover:bg-green-700'
          variant='outline'
        >
          <Save size={16} />
          Save
        </Button>
        <Button
          className='flex justify-center items-center gap-1'
          variant='secondary'
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>
      <div className='__tab_switcher flex justify-center items-center gap-1'>
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
            <SelectItem value='java'>JAVA</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
