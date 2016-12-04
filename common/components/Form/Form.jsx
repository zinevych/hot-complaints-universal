import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FileAttachment from 'material-ui/svg-icons/file/attachment';
import GoogleMap from '../GoogleMap/GoogleMapFormContainer.jsx';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  submitHandler = (e) => {
    e.preventDefault();
    const {reportsActions, reports, onSubmit} = this.props;
    
    reportsActions.postReport(reports.newReport);
    onSubmit();
  };

  handleChange = (event) => {
    this.props.reportsActions.changeNewReportField({
      [event.target.name]: event.target.value
    });
  };

  _openFileDialog = () => {
    var fileUploadDom = ReactDOM.findDOMNode(this.refs.fileUpload);
    fileUploadDom.click();
  };

  handleFileSelection = (event) => {
    this.props.reportsActions.changeNewReportField({
      photo: event.target.files[0]
    });
  };

  render() {
    const {firstName, lastName, email, title, text} = this.props.reports.newReport;

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
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
          />
          <TextField
            hintText="Петренко"
            floatingLabelText="Прізвище"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
          />
          <TextField
            hintText="Електронна пошта"
            floatingLabelText="aaa@email.com"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <TextField
            hintText=""
            floatingLabelText="На що ви хочете поскаржитись?"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="title"
            onChange={this.handleChange}
            value={title}
          />

          <TextField
            hintText=""
            floatingLabelText="Опишіть детальніше вашу проблему"
            multiLine={true}
            rows={3}
            fullWidth={true}
            name="text"
            onChange={this.handleChange}
            value={text}
          />

          <FlatButton
            label="Завантажте фото"
            onClick={this._openFileDialog}/>
          <input
            ref="fileUpload"
            name="photo"
            type="file"
            style={{"display" : "none"}}
            onChange={this.handleFileSelection}/>

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
};