import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CompilerSliceStateType {
  html: string;
  css: string;
  javascript: string;
  java: string;
  currentLanguage: 'html' | 'css' | 'javascript' | 'java';
}

const initialState: CompilerSliceStateType = {
  html: '',
  css: '',
  javascript: '',
  java: '',
  currentLanguage: 'html',
};

const compilerSlice = createSlice({
  name: 'compilerSlice',
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType['currentLanguage']>
    ) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
