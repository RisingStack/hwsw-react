import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAIL,
  POST_EXPENSE_SUCCESS,
  POST_EXPENSE_PENDING
} from "../actions/actionTypes";
import { bindActionCreators } from "../../../../Library/Caches/typescript/3.1/node_modules/redux";

export default function rootReducer(state = {}, action) {
  return {
    expenses: expensesReducer(state.expenses, action),
    expense: expenseReducer(state.expense, action),
    isPending: isPendingReducer(state.isPending, action)
  };
}

function expensesReducer(state = [], action) {
  switch (action.type) {
    case GET_EXPENSES_PENDING:
      return [];
    case GET_EXPENSES_FAIL:
      return [];
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
    case "GET_EXPENSE":
      return action.expense;
    default:
      return state;
  }
}

function isPendingReducer(state = false, action) {
  switch (action.type) {
    case GET_EXPENSES_PENDING:
      return true;
    case POST_EXPENSE_PENDING:
      return true;
    case "GET_EXPENSE":
      return true;
    // TODO: improve this
    default:
      return false;
  }
}
