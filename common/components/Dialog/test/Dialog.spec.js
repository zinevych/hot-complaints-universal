import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import Dialog from 'material-ui/Dialog';
import {mountWithTheme, renderWithTheme} from '../../../helpers/testUtils';
import DialogComponent from '../Dialog.jsx';
import FormComponent from '../../Form/Form.jsx';
import GoogleMap from '../../GoogleMap/GoogleMapFormContainer.jsx';

let props = {
  app: {
    dialogOpen: true
  },
  form: {
    errors: {}
  },
  reports: {
    newReport: {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      text: '',
      photo: null,
      likes: 0,
      marker: {}
    }
  },
  appActions: {
    toggleDialog: sinon.stub()
  }
};

describe('<DialogComponent />', () => {
  before(() => {
    global.google = {
      maps: {
        Marker: function() {
          return {
            setMap: sinon.stub()
          }
        },
        Map: function() {
          return {
            setOptions: sinon.stub(),
            getZoom: sinon.stub()
          }
        },
        event: {
          addListener: sinon.stub(),
          removeListener: sinon.stub()
        }
      }
    };
  });

  after(() => {
    delete global.google;
  });
  
  it('calls render', () => {
    sinon.spy(DialogComponent.prototype, 'render');
    mountWithTheme(<DialogComponent {...props} />);
    expect(DialogComponent.prototype.render.calledOnce).to.equal(true);
  });

  it('render correct title', () => {
    const wrapper = mountWithTheme(<DialogComponent {...props} />);
    //console.info(wrapper.debug())
    expect(wrapper.find(Dialog).first().props().title).to.contain('Додайте свою скаргу')
  });

  // it('render correct elements', () => {
  //   const wrapper = mountWithTheme(<DialogComponent {...props} />);
  //   console.log(wrapper.debug());
  //   const renderedDialog = wrapper.find(Dialog).first().render();
  //   expect(wrapper.find(FormComponent).length).to.eql(1);
  //   //expect(renderedDialog.text()).to.eql(1);
  // })
});