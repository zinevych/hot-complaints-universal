import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './cards-container.scss';

export class CardsContainer extends React.Component {
  componentDidMount() {

  }


  render() {
    return (
      <div className="cards-container__main">
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar=""
        />
      </Card>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(CardsContainer)
