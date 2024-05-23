import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CompilerSliceStateType } from './compilerSlice';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      CompilerSliceStateType['fullCode']
    >({
      query: () => ({
        url: '/compiler/save',
        method: 'POST',
      }),
    }),
    loadCode: builder.mutation<
      { fullCode: CompilerSliceStateType['fullCode']; isOwner: boolean },
      { urlId: string }
    >({
      query: (body) => ({
        url: '/compiler/load',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useSaveCodeMutation, useLoadCodeMutation } = api;
