import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import AppBarElement from '../components/AppBar'
import * as CounterActions from '../actions'

export class App extends React.Component {
  render() {
    return (<div>
      <AppBarElement />
    </div>)
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
