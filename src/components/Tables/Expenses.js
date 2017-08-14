import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExpensesItem, deleteExpensesItem }from '../../actions';

class Expenses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      oneTime: '',
      monthly: '',
      validationMsg: ''
    };
  }

  updateItemName = (event) => {
    this.setState({
      ...this.state,
      itemName: event.target.value
    });
  }

  updateOneTime = (event) => {
    this.setState({
      ...this.state,
      oneTime: event.target.value
    });
  }

  updateMonthly = (event) => {
    this.setState({
      ...this.state,
      monthly: event.target.value
    });
  }

  addItem = () => {
    const itemNameArray = this.props.expensesList.map((item) => {
      return item.itemName;
    });
    if (!this.state.itemName || !this.state.oneTime || !this.state.monthly) {
      this.setState({
        ...this.state,
        validationMsg: 'Fields must not be empty'
      });
    } else if (isNaN(this.state.oneTime) || isNaN(this.state.monthly)) {
      this.setState({
        ...this.state,
        validationMsg: 'Please input currency values into the correct fields'
      });
    } else if (itemNameArray.includes(this.state.itemName)) {
      this.setState({
        ...this.state,
        validationMsg: 'Item name must be unique, please choose another'
      });
    } else {
      const item = {
        itemName: this.state.itemName,
        oneTime: parseFloat(this.state.oneTime),
        monthly: parseFloat(this.state.monthly)
      };
      this.props.addExpensesItem(item);
      this.setState({
        ...this.state,
        validationMsg: ''
      });
    }
  }

  deleteItem = (index) => {
    this.props.deleteExpensesItem(index);
  }

  displayDynamicRows = () => {
    return this.props.expensesList.map((item, index) => (
      <tr key={index}>
        <td>{item.itemName}</td>
        <td>$ {item.oneTime.toFixed(2)}</td>
        <td>$ {item.monthly.toFixed(2)}</td>
        <td><button className="btn btn-danger btn-sm" onClick={() => this.deleteItem(index)}>Delete</button></td>
      </tr>
    ));
  }

  displayValidation = () => {
    if (!this.state.validationMsg) {
      return { display: 'none' };
    } else {
      return { display: 'block' };
    }
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>One-Time</th>
              <th>Monthly</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            {this.displayDynamicRows()}

            <tr className="expenses-submit">
              <td>
                <input type="text" placeholder="Expense Name" value={this.state.itemName} onChange={this.updateItemName}/>
              </td>
              <td>
                <input type="text" placeholder="Insert Currency Value" value={this.state.oneTime} onChange={this.updateOneTime} />
              </td>
              <td>
                <input type="text" placeholder="Insert Currency Value" value={this.state.monthly} onChange={this.updateMonthly} />
              </td>
              <td >
                <button className="btn btn-primary btn-sm" onClick={this.addItem}>Add Expense Item</button>
              </td>
            </tr>

          </tbody>
        </table>

        <div className="alert alert-danger" role="alert" style={this.displayValidation()}>
          <strong>Invalid Input: </strong> {this.state.validationMsg}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { expensesList: state.expensesReducer };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addExpensesItem, deleteExpensesItem}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
