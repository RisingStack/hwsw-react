import {
  GET_EXPENSES_SUCCESS,
  POST_EXPENSE_SUCCESS,
  GET_EXPENSE_SUCCESS
} from "../actions/actionTypes";
import { START_LOADING, STOP_LOADING } from "../actions/loaderActions";

export default function rootReducer(state = {}, action) {
  return {
    expenses: expensesReducer(state.expenses, action),
    expense: expenseReducer(state.expense, action),
    isLoading: isLoadingReducer(state.isLoading, action)
  };
}

function expensesReducer(state = [], action) {
  switch (action.type) {
    case GET_EXPENSES_SUCCESS:
      return action.value;
    case POST_EXPENSE_SUCCESS:
      return [...state, action.value];
    default:
      return state;
  }
}

function expenseReducer(state = {}, action) {
  switch (action.type) {
    case GET_EXPENSE_SUCCESS:
      return action.value;
    default:
      return state;
  }
}

function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}
