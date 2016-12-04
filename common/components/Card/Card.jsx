import React from 'react';
import * as AppActions from '../../actions/appActions'
import {Card, CardActions, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import LikeComponent from '../Like/Like.jsx';
import Toggle from 'material-ui/Toggle';
import GoogleMap from '../GoogleMap/GoogleMapCardContainer.js';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

export class CardComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      showMap: false
    }
  }

  handleToggle = (event, toggle) => {
    this.setState({showMap: toggle});
  };

  render() {
    const {user, title, text, photo} = this.props.item;
    const photoBlock = photo ? <CardMedia><img src={photo}/></CardMedia> : null;
    const mapBlock = this.state.showMap ? <CardMedia><GoogleMap {...this.props} /></CardMedia> : null;
    const mapBlockToggle = this.props.item.marker ? <Toggle
      toggled={this.state.showMap}
      onToggle={this.handleToggle}
      labelPosition="right"
      label="Показати карту"
    /> : null;

    return (
      <Card>
        <CardHeader
          title={`${user.firstName} ${user.lastName}`}
          subtitle={user.email}
          avatar={user.avatar}
        />
        {photoBlock}
        {mapBlock}
        <CardTitle title={title}/>
        <CardText>
          {mapBlockToggle}
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