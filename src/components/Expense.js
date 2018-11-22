import React, { Component } from "react";

export default class Expense extends Component {
  componentDidMount() {
    this.props.getExpense(this.props.match.params.id);
  }

  render() {
    const { expense } = this.props;
    return <div>{JSON.stringify(expense)}</div>;
  }
}
