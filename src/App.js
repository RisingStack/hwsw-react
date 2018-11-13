import React, { Component } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      expenses: [
        { id: 0, name: 'Kiadas #1', amount: 12312, currency: 'huf', comment: '....' },
        { id: 1, name: 'Kiadas #2', amount: 342, currency: 'eur', comment: '....' }
      ]
    }

    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleAddExpense(expense) {
    this.setState({
      expenses: [ 
        ...this.state.expenses,
        Object.assign(
          expense,
          { id: this.state.expenses[this.state.expenses.length - 1].id + 1 })
      ]
    })
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
        <ExpenseList expenses={this.state.expenses}/>
        {/* <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> { this.state.clickCount } */}
      </div>
    );
  }
}

export default App;
