import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { App } from '../App.jsx';
import {mountWithTheme} from '../../../helpers/testUtils';
import AppBarComponent from '../../../components/AppBar/AppBar.jsx'
import DrawerComponent from '../../../components/Drawer/Drawer.jsx'
import DialogComponent from '../../../components/Dialog/Dialog.jsx'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const props = {
  app: {
    drawerOpen: false,
    dialogOpen: false
  },
  appActions: {
    toggleDialog: function () {
    }
  },
  reportsActions: {
    getReports: function() {}
  },
  reports: {
    list: []
  }
}

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    app: {
      drawerOpen: false,
      dialogOpen: false
    },
    reports: {
      list: []
    }
  })
}
const options = {
  context: { 
    store: store
  },
  childContextTypes: { 
    store: React.PropTypes.object.isRequired
  }
}

describe('<App />', () => {

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mountWithTheme(<App {...props} />, options);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('contains all required components', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(AppBarComponent).length).to.eql(1);
    expect(wrapper.find(DrawerComponent).length).to.eql(1);
    expect(wrapper.find(DialogComponent).length).to.eql(1);
    expect(wrapper.find(FloatingActionButton).length).to.eql(1);
  })

});