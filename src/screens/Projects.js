import React, { Component } from 'react';
import Logo from '../logo.svg'
import '../App.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <div className="Gallery">
          <div className="GalleryRow">
            <img src={Logo} alt=""/>
            <img src={Logo} alt=""/>
            <img src={Logo} alt=""/>
          </div>
          <div className="GalleryRow">
            <img src={Logo} alt=""/>
            <img src={Logo} alt=""/>
            <img src={Logo} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
