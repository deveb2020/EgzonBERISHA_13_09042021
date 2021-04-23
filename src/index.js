import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducers from './Reducers/RootReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
  key: 'RootReducers',
  storage,
  blacklist: ["user"] // we use blacklist to select only the state we dont whant to be affectes
}

const persistedReducer = persistReducer( persistConfig, RootReducers)


const store = createStore (
  persistedReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

let persistor = persistStore(store)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  PERSISTE REDUX LIBRARY

  ## What is Persiste in Redux ?

    Persiste is a Redux library wich helps us to prevent lost of our states when the browser is refreshed
    ex: if the use is Loged In in his profile page and he refreshes the page Persiste keeps all of his old states and data intact

  ## How it works ?

    We should put our Store inside the persistor so it can acces the whole project
    Than we can chose in persisteConfig which state to preserve we the help of whitelist or blakclsit
  

*/
