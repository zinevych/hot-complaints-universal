import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import SocialPlusOne from 'material-ui/svg-icons/social/plus-one';

export default class LikeComponent extends React.Component {
  addLike = () => {
    this.props.reportsActions.like(this.props.item);
  };

  render() {
    return (
      <div className="like-component__container">
        <Badge
          badgeContent={this.props.item.likes}
          primary={true}
        >
          <SocialPlusOne onClick={this.addLike} />
        </Badge>
      </div>
    )
  }
}