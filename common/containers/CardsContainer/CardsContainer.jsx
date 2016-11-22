import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReportsActions from '../../actions/reportsActions'
import CardComponent from '../../components/Card/Card.jsx'
import './cards-container.scss';

export class CardsContainer extends React.Component {
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
        return <CardComponent {...item}></CardComponent>
    });
  }
}

const mapStateToProps = (state) => ({
  reports: state.reports
});

function mapDispatchToProps(dispatch) {
  return {
    reportsActions: bindActionCreators(ReportsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
