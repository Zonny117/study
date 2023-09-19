import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

/* 
  리덕스 스토어를 사용하기 위해서는 
  Provider로 감싸야한다.
  Provider에는 필수 속성인 store가 있으며 해당 속성에
  configureStore를 전달하면된다.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
