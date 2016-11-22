import React from 'react';
import TextField from 'material-ui/TextField';
import * as AppActions from '../../actions/appActions'
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

export class FormComponent extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();

    this.props.onSubmit();
  }

  render() {
    const validationMessages = {
      requiredText: 'Це поле обовязкове до заповнення.'
    }

    return (
        <form onSubmit={this.submitHandler}>
          <TextField
            hintText="Іван"
            floatingLabelText="Ім'я"
            multiLine={false}
            rows={1}
            fullWidth={true}
          />
          <TextField
            hintText="Петренко"
            floatingLabelText="Прізвище"
            multiLine={false}
            rows={1}
            fullWidth={true}
          />
          <TextField
            hintText="Працівник"
            floatingLabelText="Посада"
            multiLine={false}
            rows={1}
            fullWidth={true}
          />
          <TextField
            hintText=""
            floatingLabelText="На що ви хочете поскаржитись?"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="title"
          />
          <TextField
            hintText=""
            floatingLabelText="Опишіть детальніше вашу проблему"
            multiLine={true}
            rows={3}
            fullWidth={true}
            name="text"
          />

          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.props.onSubmit}
          />
          <FlatButton
            label="Submit"
            type="submit"
            primary={true}
          />
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)