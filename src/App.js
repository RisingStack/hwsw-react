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
        <ExpenseList expenses={this.state.expenses}/>
        <ExpenseForm />
        {/* <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> { this.state.clickCount } */}
      </div>
    );
  }
}

export default App;
