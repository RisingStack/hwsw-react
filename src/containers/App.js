import React, { Component } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { connect } from 'react-redux';
import { addExpense, getExpenses } from '../actions/expenseActions';
// import { getExpenses } from '../api';
import { incrementAsync } from '../actions/countActions';

class App extends Component {
  constructor() {
    super()

    // this.state = {
    //   apiExpenses: []
    // }

    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleAddExpense(expense) {
    this.props.addExpense(expense)
      // .then(() => {
      //   this.props.getExpenses()
      // });
  }

  componentDidMount() {
    this.props.getExpenses();
    // getExpenses()
    //   .then(response => {
    //     this.setState({
    //       apiExpenses: response.data
    //     })
    //   })
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
        <ExpenseList expenses={this.props.expenses} isLoading={this.props.isPending}/>
        {/* <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> { this.state.clickCount } */}
        <button onClick={() => { this.props.increment(3) }}>{this.props.count}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    expenses: state.expense.expenses,
    isPending: state.expense.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
    increment: (value) => dispatch(incrementAsync(value)),
    getExpenses: () => dispatch(getExpenses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
