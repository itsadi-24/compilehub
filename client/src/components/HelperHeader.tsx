import { Code, Copy, Loader2, Save, Share2 } from 'lucide-react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { DialogHeader } from './ui/dialog';
import { toast } from 'sonner';

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn, setShareBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, []);
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
        {shareBtn && (
          <Dialog>
            <DialogTrigger className='flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9'>
              <Share2 size={16} />
              Share
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='flex items-center justify-center gap-1'>
                  <Code />
                  Share your code
                </DialogTitle>
                <DialogDescription className='flex flex-col gap-2'>
                  <div className='flex __url'>
                    <input
                      type='text'
                      disabled
                      className='w-full px-2 py-2 text-white select-none bg-slate-800'
                      value={window.location.href}
                    />
                    <Button
                      variant='outline'
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          window.location.href
                        );
                        toast('URL copied to your clipboard');
                      }}
                    >
                      <Copy size={14} />
                    </Button>
                  </div>
                  <p>Share this URL with your friends to collaborate.</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
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
