import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import HelperHeader from './HelperHeader';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateCodeValue } from '@/redux/slices/compilerSlice';
import React from 'react';

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <>
      <HelperHeader />
      <div className='p-2 max-h-[calc(100vh-50px-50px)] overflow-scroll'>
        <CodeMirror
          value={fullCode[currentLanguage]}
          // height='calc(100vh-50px-50px)'
          extensions={[loadLanguage(currentLanguage)!]}
          className='code-editor'
          onChange={onChange}
          theme={andromedaInit({
            settings: {
              caret: '#c6c6c6',
              fontFamily: 'monospace',
            },
          })}
        />
      </div>
    </>
  );
}
