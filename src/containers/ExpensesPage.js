import React, { Component } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { connect } from "react-redux";
import { addExpense, getExpenses } from "../actions/expenseActions";
// import { getExpenses } from '../api';
import { incrementAsync } from "../actions/countActions";

class ExpensesPage extends Component {
  constructor() {
    super();

    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleAddExpense(expense) {
    this.props.addExpense(expense);
  }

  componentDidMount() {
    this.props.getExpenses();
    setInterval(() => this.props.getExpenses(), 3000);
  }

  render() {
    return (
      <div>
        <ExpenseForm onAddExpense={this.handleAddExpense} />
        <ExpenseList expenses={this.props.expenses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense)),
    getExpenses: () => dispatch(getExpenses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesPage);
