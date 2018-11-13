import React from 'react';

function ExpenseList (props) {
  return <div>
    { props.expenses.map((expense) => {
      return <tr>{expense.name}</tr>;
    })}
    </div>;
}

export default ExpenseList;
