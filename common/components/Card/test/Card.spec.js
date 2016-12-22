import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import {mountWithTheme} from '../../../helpers/testUtils';
import Card  from '../Card.jsx';
import Toggle from 'material-ui/Toggle';
import GoogleMap from '../../GoogleMap/GoogleMapCardContainer.js';
import {CardActions, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card';

const props = {
  appActions: {
    toggleDialog: function () {
    }
  },
  reportsActions: {
    like: function () {}
  },
  item: {
    user: {
      firstName: 'TestFirstName',
      lastName: 'TestLatName',
      email: 'TestEmail',
      avatar: 'avatar'
    },
    title: 'TestTitle',
    text: 'testText',
    photo: 'testLink',
    likes: 2,
    marker: null
  }
};



describe('<Card />', () => {
  before(() => {
    global.google = {
      maps: {
        Marker: function() {
          return {
            setMap: sinon.stub(),
            setPosition: sinon.stub(),
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
    sinon.spy(Card.prototype, 'render');
    const wrapper = mountWithTheme(<Card {...props} />);
    expect(Card.prototype.render.calledOnce).to.equal(true);
  });

  it('contains all required components', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find(CardHeader).length).to.eql(1);
    expect(wrapper.find(CardTitle).length).to.eql(1);
    expect(wrapper.find(CardText).length).to.eql(1);
    expect(wrapper.find(CardActions).length).to.eql(1);
    expect(wrapper.find(CardMedia).length).to.eql(1);
  });
  
  it('should render correct header', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find(CardHeader).first().props().title)
      .to.eql(`${props.item.user.firstName} ${props.item.user.lastName}`);

    expect(wrapper.find(CardHeader).first().props().subtitle)
      .to.eql(props.item.user.email);

    expect(wrapper.find(CardHeader).first().props().avatar)
      .to.eql(props.item.user.avatar);
  });
  
  it('should render correct card title', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find(CardTitle).first().props().title).to.eql(props.item.title);
  });
  
  it('should hide map toggle', () => {
    const wrapper = mountWithTheme(<Card {...props} />);
    expect(wrapper.find(Toggle).length).to.eql(0);
  });
  
  it('should display map toggle', () => {
    props.item.marker = {
      lat: 1,
      lng: 1
    };
    const wrapper = mountWithTheme(<Card {...props} />);
    expect(wrapper.find(Toggle).length).to.eql(1);
  });

  it('click on toggle should call appropriate action', () => {
    props.item.marker = {
      lat: 1,
      lng: 1
    };
    let wrapper = mountWithTheme(<Card {...props} />);
    const mapToggle = wrapper.find(Toggle).first()
      .find('input[type="checkbox"]').first();
    
    mapToggle.simulate('click');
    wrapper.update();    
    expect(wrapper.find(GoogleMap).length).to.eql(1);
  });
  
  it('render correct text', () => {
    let wrapper = mountWithTheme(<Card {...props} />);
    expect(wrapper.find(CardText).first().text()).to.eql(props.item.text);
  });
});