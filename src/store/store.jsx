import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';

/* 
    리듀서 있고, 스토어 있고,
*/

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
  },
});

const store = configureStore(todoSlice.reducer);

export default store;
