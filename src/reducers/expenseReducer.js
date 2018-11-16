import { GET_EXPENSES_PENDING, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAIL, POST_EXPENSE_PENDING, POST_EXPENSE_FAIL, POST_EXPENSE_SUCCESS } from '../actions/actionTypes';

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

    case POST_EXPENSE_SUCCESS: return {
      ...state,

      expenses: [...state.expenses, action.value]
    }
    case POST_EXPENSE_FAIL:
    case POST_EXPENSE_PENDING:
    default: return state;
    
    // case ADD_EXPENSE: return {
    //   ...state,
    //   expenses: [ 
    //     ...state.expenses,
    //     Object.assign(
    //       action.value,
    //       { id: state.expenses[state.expenses.length - 1].id + 1 })
    //   ]
    // }
  }
};

export default expenseReducer;
