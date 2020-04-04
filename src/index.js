import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App'

import * as serviceWorker from './serviceWorker'

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    render(App)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
