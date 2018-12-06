import React, { Component } from 'react';
import '../App.css';

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      email: '',
      message: ''
    }
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

  handleChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }


  render() {
    return (
      <div className="Contact">
        <h2>Contact</h2>
        <div className="InputAlign">
          <div className="InputField">
            <label>Firstname</label><br />
            <input
            type="text"
            value={this.state.firstname}
            onChange={this.handleChangeFirstname} />
          </div>
          <div className="InputField">
            <label>Email</label><br />
            <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail} />
          </div>
        </div>
        <div className="AlignOnMobile">
          <div className="InputField">
          <label>Message</label><br />
          <textarea rows="10" cols="1"
          type="text"
          value={this.state.message}
          onChange={this.handleChangeMessage} />
          </div>
        </div>
        <button className="Send">Send</button>
      </div>
    );
  }
}
