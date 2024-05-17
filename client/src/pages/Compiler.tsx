import CodeEditor from '@/components/CodeEditor';
import RenderCode from '@/components/RenderCode';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

const Compiler = () => {
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
