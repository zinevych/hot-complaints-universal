import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import Like from '../Like.jsx';
import Badge from 'material-ui/Badge';
import SocialPlusOne from 'material-ui/svg-icons/social/plus-one';
import {mountWithTheme} from '../../../helpers/testUtils';

const props = {
  appActions: {
    toggleDialog: function () {
    }
  },
  reportsActions: {
    like: function () {}
  },
  item: {
    likes: 0
  }
};

describe('<Like />', () => {
  it('calls render', () => {
    sinon.spy(Like.prototype, 'render');
    const wrapper = mountWithTheme(<Like {...props} />);
    expect(Like.prototype.render.calledOnce).to.equal(true);
  });
  
  it('render correct amout of likes from start', () => {
    const wrapper = shallow(<Like {...props} />);
    const badgeObj = wrapper.find(Badge).first();
    expect(badgeObj.props().badgeContent).to.eql(props.item.likes)
  });

  it('should call an appropriate action', () => {
    sinon.spy(props.reportsActions, 'like');
    const wrapper = shallow(<Like {...props} />);
    const plusOneButton = wrapper.find(SocialPlusOne).first();
    plusOneButton.simulate('click');
    expect(props.reportsActions.like.calledOnce).to.eql(true);
  })
});