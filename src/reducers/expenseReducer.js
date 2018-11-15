import { ADD_EXPENSE, GET_EXPENSES_PENDING, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAIL } from '../actions/actionTypes';

const initialState = {
  expenses: [],
  isPending: false,
  error: null
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES_PENDING: return {
      ...state,

      expenses: [],
      isPending: true,
      error: null
    }
    case GET_EXPENSES_SUCCESS: return {
      ...state,

      expenses: action.value,
      isPending: false
    }
    case GET_EXPENSES_FAIL: return {
      ...state,

      isPending: false,
      error: action.error
    }
    
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
