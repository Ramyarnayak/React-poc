import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// state provider, reducer
import { Provider1 } from './state/Provider';
import reducer, { initialState } from './state/reducer'
import { Provider } from 'react-redux';
import configureStore from './Pages/NewsPage/store/configureStore'
import { BrowserRouter } from 'react-router-dom';

// Initialize store
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
      <Provider1 initialState={initialState} reducer={reducer}>
        <Provider store={store}>

    <App />
 
    </Provider>
    </Provider1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
