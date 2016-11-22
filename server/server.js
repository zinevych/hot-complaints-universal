/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import configureStore from '../common/store/configureStore'
import Routes from '../common/containers/Routes'
import { RouterContext, match } from 'react-router';

const app = new Express();
const port = 3000;



// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

require('../api/index')(app);

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  return match({ routes: Routes(req.headers['user-agent']), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const counter =  0;

      // Compile an initial state
      const preloadedState = {counter}

      // Create a new Redux store instance
      const store = configureStore(preloadedState)

      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      // Grab the initial state from our Redux store
      const finalState = store.getState()

      // Send the rendered page back to the client
      res.send(renderFullPage(html, finalState))
    } else {
      res.status(404).send('Not found')
    }
  })
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
