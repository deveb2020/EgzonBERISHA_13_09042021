import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducers from './Reducers/RootReducers'
import setAuthorisationToken from './components/SetAuthorisationToken';

const store = createStore(
  RootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

setAuthorisationToken(localStorage.jwtToken)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
