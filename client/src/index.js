import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {SnackbarProvider} from "notistack"
import * as serviceWorker from './serviceWorker'
import {store} from './store/store'

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

serviceWorker.unregister()