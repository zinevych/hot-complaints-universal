import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { App } from '../App.jsx';
import {mountWithTheme} from '../../../helpers/testUtils';
const props = {
  appActions: {
    toggleDialog: function () {
    }
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

});