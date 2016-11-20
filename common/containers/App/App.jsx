import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBarComponent from '../../components/AppBar/AppBar.jsx'
import DrawerComponent from '../../components/Drawer/Drawer.jsx'
import CardsContainer from './../CardsContainer/CardsContainer.jsx'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from '../../../node_modules/material-ui/svg-icons/content/add';

//import './app.scss';

export class App extends React.Component {  
  render() {
    const style = {
      marginRight: 20
    };
    
    console.log(this.props.children)

    return (<div className="hot-problems__main">
      <AppBarComponent {...this.props}/>
      <DrawerComponent {...this.props}/>
      <div className="hot-problems__main-container">
        <CardsContainer {...this.props}/>
      </div>
      
      <FloatingActionButton style={style}>
        <ContentAdd />
      </FloatingActionButton>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(App);
