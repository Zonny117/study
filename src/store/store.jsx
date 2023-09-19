import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
  },
});

/* 
  configureStore에는 객체를 전달해야하며, 필수 속성은 reducer가 있다.
  reducer에도 마찬가지로 객체를 전달해야하며, createSlice로 생성한 reducer를 전달한다.
*/
const store = configureStore({ reducer: { todo: todoSlice.reducer } });

/* 
  action 같은 경우 간결하게 전달해주면 편리하게 사용할 수 있다.

  비구조화 할당을 통해
  const { add } = todoSlice.actions는 todoSlice.actions.add()와 같다.
*/
export const { add } = todoSlice.actions;
export default store;
