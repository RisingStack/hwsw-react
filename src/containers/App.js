import React, { Component } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { connect } from 'react-redux';
import { addExpense } from '../actions/actionTypes';
import { getExpenses } from '../api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      apiExpenses: []
    }

    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleAddExpense(expense) {
    this.props.onAddExpense(expense);
  }

  componentDidMount() {
    getExpenses()
      .then(response => {
        this.setState({
          apiExpenses: response.data
        })
      })
      // .catch(err => {

      // })
  }

  // handleNameChange(key, value) {
  //   this.setState({
  //     [key]: value
  //   })
  // }

  // handlePlusOneClick() {
  //   this.setState((prevState) => {
  //     return { clickCount: prevState.clickCount + 1 }
  //   })

  //   this.setState((prevState) => {
  //     return { clickCount: prevState.clickCount + 1 }
  //   })
  // }

  render() {
    return (
      <div>
        <ExpenseForm onAddExpense={this.handleAddExpense} />
        <ExpenseList expenses={this.state.apiExpenses}/>
        {/* <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> { this.state.clickCount } */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
