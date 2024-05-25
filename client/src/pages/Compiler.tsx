import CodeEditor from '@/components/CodeEditor';
import RenderCode from '@/components/RenderCode';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { updateFullCode } from '@/redux/slices/compilerSlice';
import { handleError } from '@/utils/handleError';
// import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoadCodeMutation } from '@/redux/slices/api';
import { useParams } from 'react-router-dom';
import { Loader } from '@/components/Loader/Loader';
import Header from '@/components/ui/Header';
// import { toast } from 'sonner';

const Compiler = () => {
  const { urlId } = useParams();
  const [loadExistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      if (urlId) {
        const response = await loadExistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
      }
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   if (error?.response?.status == 500) {
      //     toast('Invalid URL,Default Code Loaded');
      //   }
      // }
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);
  if (isLoading)
    return (
      <div className=' w-full h-[calc(100dvh-60px)] flex justify-center items-center '>
        <Loader />
      </div>
    );
  return (
    <>
      <Header />
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel className='h-auto min-w-[350px] ' defaultSize={50}>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          className='h-[calc(100dvh-60px)] min-w-[350px]'
          defaultSize={50}
        >
          <RenderCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Compiler;
