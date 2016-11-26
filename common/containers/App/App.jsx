import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBarComponent from '../../components/AppBar/AppBar.jsx'
import DrawerComponent from '../../components/Drawer/Drawer.jsx'
import DialogComponent from '../../components/Dialog/Dialog.jsx'
import CardsContainer from './../CardsContainer/CardsContainer.jsx'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from '../../../node_modules/material-ui/svg-icons/content/add';
import * as AppActions from '../../actions/appActions'
import * as ReportsActions from '../../actions/reportsActions'

import './app.scss';

export class App extends React.Component {  
  componentDidMount() {}
  
  render() {

    return (<div className="hot-problems__main">
      <AppBarComponent {...this.props}/>
      <DrawerComponent {...this.props}/>
      <DialogComponent {...this.props}/>
      <div className="hot-problems__main-container">
        <CardsContainer {...this.props}/>
      </div>

      
      <FloatingActionButton className="floating-button" onClick={this.props.appActions.toggleDialog}>
        <ContentAdd />
      </FloatingActionButton>
      
      
    </div>)
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  reports: state.reports
});

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    reportsActions: bindActionCreators(ReportsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
