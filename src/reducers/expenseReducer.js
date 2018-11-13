import { ADD_EXPENSE } from '../actions/actionTypes';

const initialState = {
  expenses: [
    { id: 0, name: 'Kiadas #1', amount: 12312, currency: 'huf', comment: '....' },
    { id: 1, name: 'Kiadas #2', amount: 342, currency: 'eur', comment: '....' }
  ]
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: return {
      ...state,
      expenses: [ 
        ...state.expenses,
        Object.assign(
          action.value,
          { id: state.expenses[state.expenses.length - 1].id + 1 })
      ]
    }
    default: return state;
  }
};

export default expenseReducer;
