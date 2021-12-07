import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/reduxStore';
import App from './App';
// import StoreContext from './StoreContext';

function renderEntireTree() {
  ReactDOM.render(
      <BrowserRouter>
        <App 
          store={store}
        />
      </BrowserRouter>,
     document.getElementById('root')
  );
}

store.subscribe(renderEntireTree);

renderEntireTree();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
