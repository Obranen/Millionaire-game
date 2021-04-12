import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from "./store/reducers/rootReducer"
import {SnackbarProvider} from "notistack"

const loggerMiddleware = store => next => action => {
  return next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <App/>
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
