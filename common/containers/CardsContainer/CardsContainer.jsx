import React from 'react';
import CardComponent from '../../components/Card/Card.jsx'
import './cards-container.scss';

export default class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.reportsActions.getReports();
  }

  render() {
    return (
      <div className="cards-container__main">
        {this.buildCardsList(this.props.reports.list)}
        </div>
    )
  }
  
  buildCardsList(list) {
    return list.map((item) => {
        return <CardComponent item={item} {...this.props} />
    });
  }
}
