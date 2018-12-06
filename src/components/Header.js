import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import '../App.css';

class Header extends Component {

  doSomething () {
    alert('Hello World')
  }

  render() {
    return (
      <div className="Header">
        <div className="FullScreen" onClick={() => this.doSomething()}>
          <MaterialIcon icon="chevron_left" size="large" color="#212121"/>
        </div>
        <div>
          <ul className="Action">
            <li>
              <MaterialIcon
                icon="cloud_download"
                size="medium"
                color="#212121"
                onClick={() => this.doSomething()}/>
            </li>
            <li>
              <MaterialIcon
                icon="bookmark_border"
                size="medium"
                color="#212121"
                onClick={() => this.props.bookmark}/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
