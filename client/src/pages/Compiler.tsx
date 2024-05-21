import CodeEditor from '@/components/CodeEditor';
import RenderCode from '@/components/RenderCode';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { updateFullCode } from '@/redux/slices/compilerSlice';
import { handleError } from '@/utils/handleError';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Compiler = () => {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/compiler/load', {
        urlId: urlId,
      });
      dispatch(updateFullCode(response.data.fullCode));

      console.log(urlId);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  return (
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
  );
};

export default Compiler;
