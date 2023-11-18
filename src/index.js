import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './Components/app/App';
import store from './store'
import './style/style.sass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
    
  </>
);

