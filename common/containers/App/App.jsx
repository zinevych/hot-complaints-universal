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

import './app.scss';

export class App extends React.Component {  
  render() {
    console.log(this.props.children)

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
  counter: state.counter
});

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
