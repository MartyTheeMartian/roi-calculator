import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calculations extends Component {

  constructor(props) {
    super(props);

    this.oneTimeRevenueTotal = 0;
    this.monthlyRevenueTotal = 0;
    this.revenueTotal = 0;
    this.oneTimeExpensesTotal = 0;
    this.monthlyExpensesTotal = 0;
    this.expensesTotal = 0;
    this.monthlyContributionProfit = 0;
    this.contributionProfitTotal = 0;
  }

  getOneTimeRevenueTotal = () => {
    if (this.props.revenueList.length === 0) {
      return '';
    } else {
      this.oneTimeRevenueTotal = this.props.revenueList.reduce((total, item) => {
        return total + item.oneTime;
      }, 0);
      return '$ ' + this.oneTimeRevenueTotal.toFixed(2);
    }
  }

  getMonthlyRevenueTotal = () => {
    if (this.props.revenueList.length === 0) {
      return '';
    } else {
      this.monthlyRevenueTotal = this.props.revenueList.reduce((total, item) => {
        return total + item.monthly;
      }, 0);
      return '$ ' + this.monthlyRevenueTotal.toFixed(2);
    }
  }

  getRevenueTotal = () => {
    if (this.props.revenueList.length === 0) {
      return '';
    } else {
      this.revenueTotal = this.oneTimeRevenueTotal + (this.monthlyRevenueTotal * 12);
      return '$ ' + this.revenueTotal.toFixed(2);
    }
  }

  getOneTimeExpensesTotal = () => {
    if (this.props.expensesList.length === 0) {
      return '';
    } else {
      this.oneTimeExpensesTotal = this.props.expensesList.reduce((total, item) => {
        return total + item.oneTime;
      }, 0);
      return '$ ' + this.oneTimeExpensesTotal.toFixed(2);
    }
  }

  getMonthlyExpensesTotal = () => {
    if (this.props.expensesList.length === 0) {
      return '';
    } else {
      this.monthlyExpensesTotal = this.props.expensesList.reduce((total, item) => {
        return total + item.monthly;
      }, 0);
      return '$ ' + this.monthlyExpensesTotal.toFixed(2);
    }
  }

  getExpensesTotal = () => {
    if (this.props.expensesList.length === 0) {
      return '';
    } else {
      this.expensesTotal = this.oneTimeExpensesTotal + (this.monthlyExpensesTotal * 12);
      return '$ ' + this.expensesTotal.toFixed(2);
    }
  }

  getMonthlyContributionProfit = () => {
    if (this.props.expensesList.length === 0 || this.props.revenueList.length === 0) {
      return '';
    } else {
      this.monthlyContributionProfit = this.monthlyRevenueTotal - this.monthlyExpensesTotal;
      return '$ ' + this.monthlyContributionProfit.toFixed(2);
    }
  }

  getContributionProfitTotal = () => {
    if (this.props.expensesList.length === 0 || this.props.revenueList.length === 0) {
      return '';
    } else {
      this.contributionProfitTotal = this.revenueTotal - this.expensesTotal;
      return '$ ' + this.contributionProfitTotal.toFixed(2);
    }
  }

  getContributionMargin = () => {
    if (this.props.expensesList.length === 0 || this.props.revenueList.length === 0) {
      return '';
    } else {
      let cal = (this.contributionProfitTotal / this.revenueTotal) * 100;
      return cal.toFixed(0) + '%';
    }
  }

  getCapitalROI = () => {
    if (this.props.expensesList.length === 0 || this.props.revenueList.length === 0) {
      return '';
    } else {
      let cal = (this.oneTimeExpensesTotal - this.oneTimeRevenueTotal) / this.monthlyContributionProfit;
      return cal.toFixed(1);
    }
  }

  render() {
    return (
      <table id="cal-table" className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>One-Time</th>
            <th>Monthly</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr className="revenue-cal">
            <td ><strong>Revenue</strong></td>
            <td>{this.getOneTimeRevenueTotal()}</td>
            <td>{this.getMonthlyRevenueTotal()}</td>
            <td>{this.getRevenueTotal()}</td>
          </tr>

          <tr className="expenses-cal">
            <td ><strong>Expenses</strong></td>
            <td>{this.getOneTimeExpensesTotal()}</td>
            <td>{this.getMonthlyExpensesTotal()}</td>
            <td>{this.getExpensesTotal()}</td>
          </tr>

          <tr>
            <td colSpan="4"></td>
          </tr>

          <tr>
            <td  colSpan="2"><strong>Contribution Profit</strong></td>
            <td>{this.getMonthlyContributionProfit()}</td>
            <td>{this.getContributionProfitTotal()}</td>
          </tr>

          <tr>
            <td  colSpan="2"><strong>Contribution Margin</strong></td>
            <td></td>
            <td>{this.getContributionMargin()}</td>
          </tr>

          <tr>
            <td  colSpan="2"><strong>Capital ROI (Months)</strong></td>
            <td></td>
            <td>{this.getCapitalROI()}</td>
          </tr>

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    revenueList: state.revenueReducer,
    expensesList: state.expensesReducer
  };
};

export default connect(mapStateToProps)(Calculations);
