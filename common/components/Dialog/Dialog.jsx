import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FormComponent from '../Form/Form.jsx';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import * as AppActions from '../../actions/appActions'
import GoogleMap from '../GoogleMap/GoogleMapFormContainer.jsx';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './dialog.scss'

export default class DialogComponent extends React.Component {
  render() {
    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
        />
      );
    }

    return (
      <Dialog
        title="Додайте свою скаргу"
        modal={false}
        open={this.props.app.dialogOpen}
        onRequestClose={this.props.appActions.toggleDialog}
        autoScrollBodyContent={true}
      >
        <div className="add-complaint-form__container">
          <FormComponent {...this.props} onSubmit={this.props.appActions.toggleDialog}/>
          <GoogleMap {...this.props}/>
        </div>
      </Dialog>
    );
  }
}