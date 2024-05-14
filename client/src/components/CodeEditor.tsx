import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { loadLanguage, langNames } from '@uiw/codemirror-extensions-langs';
import HelperHeader from './HelperHeader';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  console.log('langNames:', langNames);
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: React.SetStateAction<string>) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <>
      <HelperHeader />
      <CodeMirror
        value={value}
        height='100vh'
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
        theme={andromedaInit({
          settings: {
            caret: '#c6c6c6',
            fontFamily: 'monospace',
          },
        })}
      />
    </>
  );
}
