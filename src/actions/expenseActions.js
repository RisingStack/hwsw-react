import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAIL,
  POST_EXPENSE_PENDING,
  POST_EXPENSE_SUCCESS,
  POST_EXPENSE_FAIL,
  GET_EXPENSE_SUCCESS
} from "./actionTypes";
import {
  getExpenses as getExpensesAPI,
  addExpense as addExpenseAPI,
  getExpense as getExpenseAPI
} from "../api";

function getExpenses() {
  return function(dispatch) {
    return getExpensesAPI().then(response => {
      dispatch({
        type: GET_EXPENSES_SUCCESS,
        value: response.data
      });
    });
  };
}

function addExpense(expense) {
  return function(dispatch) {
    return addExpenseAPI(expense).then(response => {
      dispatch({
        type: POST_EXPENSE_SUCCESS,
        value: response.data
      });
    });
  };
}

function getExpense(id) {
  return async function(dispatch) {
    const expense = await getExpenseAPI(id);
    dispatch({ value: expense, type: GET_EXPENSE_SUCCESS });
  };
}

export { getExpenses, getExpense, addExpense };
