import React from 'react'
import {Route, browserHistory, Router} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import App from './App/App.jsx'


const getRouter = (userAgent, isClient) => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100
    }
  }, {
    avatar: {
      borderColor: null
    },
    userAgent: userAgent
  });

  const MaterialUIProvider = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <App/>
    </MuiThemeProvider>
  );


  return isClient ? (
    <Router history={browserHistory}>
      <Route path="/" component={MaterialUIProvider}/>
    </Router>
  ) : (
    <Route>
      <Route name="root" path="/" component={MaterialUIProvider}/>
    </Route>
  );
};


export default getRouter;