import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import '../App.css';

export default class Pagination extends Component {

  doSomething () {
    alert('Hello World')
  }

  render() {
    return (
      <div className="Pagination">
        <div className="Previous" onClick={() => this.props.switch(0)}>
          <MaterialIcon icon="chevron_left" size="large" color="#212121" />
        </div>
        <div className="Current">
          <h4><span>{this.props.state}</span><span>/</span><span>{this.props.total}</span></h4>
        </div>
        <div className="Next" onClick={() => this.props.switch(1)}>
          <MaterialIcon icon="chevron_right" size="large" color="#212121"/>
        </div>
      </div>
    );
  }
}
