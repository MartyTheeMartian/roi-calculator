import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div id="logo">
              ROI Calculator
            </div>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
