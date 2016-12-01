import React from 'react';
import * as AppActions from '../../actions/appActions'
import {Card, CardActions, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import LikeComponent from '../Like/Like.jsx';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class CardComponent extends React.Component {
  render() {
    const {user, title, text} = this.props.item;

    const photoBlock = this.props.item.photo ? <CardMedia><img src={this.props.item.photo} /></CardMedia> : null;

    return (
      <Card>
        <CardHeader
          title={`${user.firstName} ${user.lastName}`}
          subtitle={user.email}
          avatar={user.avatar}
        />
          {photoBlock}
        <CardTitle title={title} />
        <CardText>
          {text}
        </CardText>
        <CardActions>
          <LikeComponent item={this.props.item} {...this.props} />
        </CardActions>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)