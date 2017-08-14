import React, { Component } from 'react';
import Revenue from '../Tables/Revenue';
import Expenses from '../Tables/Expenses';
import Calculations from '../Tables/Calculations';
import Reset from './Reset';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <main>
        <div id="tables" className="container">
          <Revenue />
          <Expenses />
          <Calculations />
          <Reset />
        </div>
      </main>
    );
  }
}

export default Main;
