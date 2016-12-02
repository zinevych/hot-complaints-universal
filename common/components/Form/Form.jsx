import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FileAttachment from 'material-ui/svg-icons/file/attachment';
import GoogleMap from '../GoogleMap/GoogleMap.jsx';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      text: '',
      photo: '',
      likes: 0
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    this.props.reportsActions.postReport(this.state);
    this.props.onSubmit();
  }

  handleChange = (event) => {
    console.log(event.target)
      return this.setState({
        [event.target.name]: event.target.value
      })
  }

  _openFileDialog = () => {
    var fileUploadDom = ReactDOM.findDOMNode(this.refs.fileUpload);
    fileUploadDom.click();
  }

  handleFileSelection = (event) => {
    return this.setState({
      photo: event.target.files[0]
    })
  };

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
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <TextField
            hintText="Петренко"
            floatingLabelText="Прізвище"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <TextField
            hintText="Електронна пошта"
            floatingLabelText="aaa@email.com"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <TextField
            hintText=""
            floatingLabelText="На що ви хочете поскаржитись?"
            multiLine={false}
            rows={1}
            fullWidth={true}
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <TextField
            hintText=""
            floatingLabelText="Опишіть детальніше вашу проблему"
            multiLine={true}
            rows={3}
            fullWidth={true}
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          
          <GoogleMap />

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