import React, { Component } from 'react';
import '../App.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        <div className="FrontEnd">
          <h2>Front-End</h2>

          <div className="Box">
            <h3>React & Native</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P75"></div>
            </div>
          </div>

          <div className="Box">
            <h3>Vue JS</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P65"></div>
            </div>
          </div>

          <div className="Box">
            <h3>JS Vanilla</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P90"></div>
            </div>
          </div>
          <div className="Box">
            <h3>Electron</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P50"></div>
            </div>
          </div>

        </div>
        <div className="Design">
          <h2>Design</h2>

          <div className="Box">
            <h3>Xperience Design</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P98"></div>
            </div>
          </div>

          <div className="Box">
            <h3>Sketch</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P90"></div>
            </div>
          </div>

          <div className="Box">
            <h3>Figma</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P75"></div>
            </div>
          </div>
          <div className="Box">
            <h3>Adobe Suite</h3>
            <div className="Scrollbar">
              <div className="ScrollbarFill P90"></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
