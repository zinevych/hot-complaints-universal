import React from 'react';
import * as AppActions from '../../actions/appActions'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class CardComponent extends React.Component {
  render() {
    const {user, title, text, avatar} = this.props;
    
    return (
      <Card>
        <CardHeader
          title={`${user.firstName} ${user.lastName}`}
          subtitle={user.email}
          avatar={user.avatar}
        />
        <CardTitle title={title} subtitle="Card subtitle" />
        <CardText>
          {text}
        </CardText>
        <CardActions>
          <IconButton iconClassName="material-icons" >plus_one</IconButton>
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