import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from './../../node_modules/@reduxjs/toolkit/';
import todoSlice from './reducers/todo';

// 여러개의 리듀서를 통합해서 스토어에 등록하는 것이 편함.
const rootReducer = combineReducers({
  todoSlice,
});

const store = configureStore({
  reducer: { rootReducer },
});

export default store;
