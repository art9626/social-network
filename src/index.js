import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import App from './App';

function renderEntireTree(store) {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)} 
      />
    </BrowserRouter>,
     document.getElementById('root')
  );
}

store.subscribe(renderEntireTree);

renderEntireTree(store);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
