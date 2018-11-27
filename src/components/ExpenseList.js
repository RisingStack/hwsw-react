import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./ExpenseList.scss";

class ExpenseList extends React.Component {
  constructor() {
    super();

    this.state = {
      amountGt: 1
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(expense) {
    this.props.history.push(`/expenses/${expense._id}`);
  }

  render() {
    return (
      <div className="expense-list">
        <div className="header">
          <label>Osszeg nagyobb mint: </label>
          <input
            type="number"
            value={this.state.amountGt}
            onChange={event => this.setState({ amountGt: event.target.value })}
          />
        </div>
        <table>
          <thead>
            <tr>
              <td>Megnevezes</td>
              <td>Osszeg</td>
              <td>Megjegyzes</td>
            </tr>
          </thead>
          <tbody>
            {this.props.expenses.map(expense => {
              return (
                expense.amount > this.state.amountGt && (
                  <tr
                    key={expense._id}
                    onClick={() => this.onItemClick(expense)}
                  >
                    <td>{expense.name || expense.title}</td>
                    <td>
                      {expense.amount} {expense.currency}
                    </td>
                    <td>{expense.comment}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default withRouter(ExpenseList);
