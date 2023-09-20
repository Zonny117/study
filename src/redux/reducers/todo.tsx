import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state: Array<Object>, action: PayloadAction<string>) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
