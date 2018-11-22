import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

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
      <div>
        <label>Osszeg nagyobb mint: </label>
        <input
          type="number"
          value={this.state.amountGt}
          onChange={event => this.setState({ amountGt: event.target.value })}
        />
        <table>
          <thead>
            <tr>
              <td>Megnevezes</td>
              <td>Osszeg</td>
              <td>Megjegyzes</td>
            </tr>
          </thead>
          <tbody>
            {this.props.isLoading && <p>Betoltes alatt</p>}
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

ExpenseList.defaultProps = {
  isLoading: false
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
};

export default withRouter(ExpenseList);
