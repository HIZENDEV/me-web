import React, { Component } from 'react';
import '../App.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu" style={this.props.isActive}>
      <h3 onClick={() => this.props.selectScreens(1)}>About</h3>
      <h3 onClick={() => this.props.selectScreens(2)}>Skills</h3>
      <h3 onClick={() => this.props.selectScreens(3)}>Projects</h3>
      <h3 onClick={() => this.props.selectScreens(4)}>Contact</h3>
      </div>
    );
  }
}
