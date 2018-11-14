import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Kiadas #',
      amount: '100',
      currency: 'huf',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddExpense() {
    // this.props.onAddExpense(this.state)
    const { name, amount, currency } = this.state;

    this.props.onAddExpense({
      name, amount, currency
    })
  }
  
  render() {
    const { name, amount } = this.state;

    return <div style={{ marginBottom: 50 }}>
      <label>Megnevezes</label>
      <input name='name' value={name} onChange={this.handleInputChange} />
      <label>Osszeg</label>
      <input name='amount' value={amount} onChange={this.handleInputChange} />
      <button onClick={this.handleAddExpense}>Hozzaadas</button>
    </div>;
  }
}

ExpenseForm.defaultProps = {
  onAddExpense: () => {}
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func//.isRequired
}

export default ExpenseForm;
