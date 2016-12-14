import React from 'react';
import AppBar from 'material-ui/AppBar';
import * as AppActions from '../../actions/appActions'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class AppBarComponent extends React.Component {
  render() {
    return (
      <AppBar
        title=""
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app
});

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent)