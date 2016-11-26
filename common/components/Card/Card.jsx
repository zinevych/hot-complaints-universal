import React from 'react';
import * as AppActions from '../../actions/appActions'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import LikeComponent from '../Like/Like.jsx';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class CardComponent extends React.Component {
  render() {
    console.log(this.props);

    const {user, title, text} = this.props.item;
    
    return (
      <Card>
        <CardHeader
          title={`${user.firstName} ${user.lastName}`}
          subtitle={user.email}
          avatar={user.avatar}
        />
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