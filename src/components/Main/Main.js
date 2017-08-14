import React, { Component } from 'react';
import Revenue from '../Tables/Revenue';
import Expenses from '../Tables/Expenses';
import Calculations from '../Tables/Calculations';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <main>
        <div id="tables" className="container">
          <Revenue />
          <Expenses />
          <Calculations />
        </div>
      </main>
    );
  }
}

export default Main;
