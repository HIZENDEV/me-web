import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import '../App.css';

export default class Hamburger extends Component {
  render() {
    return (
      <div className="Hamburger" onClick={() => this.props.toggle()}>
        <MaterialIcon icon="menu" size="medium" color="#fff"/>
      </div>
    );
  }
}
