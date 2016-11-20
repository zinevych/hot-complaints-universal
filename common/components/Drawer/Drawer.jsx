import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as AppActions from '../../actions/appActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class DrawerComponent extends React.Component {
  render() {
    return (
      <Drawer open={this.props.app.drawerOpen} docked={false} width={400} onRequestChange={this.props.appActions.toggleDrawer}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent)