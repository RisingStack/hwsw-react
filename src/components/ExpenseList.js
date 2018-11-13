import React from 'react';

class ExpenseList extends React.Component {
  constructor() {
    super()

    this.state = {
      amountGt: 1
    }
  }
  
  render() {
    return <div>
      <label>Osszeg nagyobb mint: </label>
      <input
        type='number'
        value={this.state.amountGt}
        onChange={(event) => this.setState({ amountGt: event.target.value })} />
      <table>
        <thead>
          <tr>
            <td>Megnevezes</td>
            <td>Osszeg</td>
            <td>Megjegyzes</td>
          </tr>
        </thead>
        <tbody>
        { this.props.expenses.map((expense) => {
          return expense.amount > this.state.amountGt &&
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amount} {expense.currency}</td>
              <td>{expense.comment}</td>
            </tr>;
        })}
        </tbody>
      </table>
    </div>;
  }
}

export default ExpenseList;
