import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../common/store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import Routes from '../common/containers/Routes.jsx'


const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    {Routes(navigator.userAgent, true)}
  </Provider>,
  rootElement
)
