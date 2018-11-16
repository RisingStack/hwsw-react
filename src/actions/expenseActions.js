import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAIL,
  POST_EXPENSE_PENDING,
  POST_EXPENSE_SUCCESS,
  POST_EXPENSE_FAIL
} from './actionTypes';
import {
  getExpenses as getExpensesAPI,
  addExpense as addExpenseAPI
} from '../api';

function getExpenses() {
  return function (dispatch) {
    // API hivas elott, jelezzuk hogy 'pending' az allapot
    dispatch({
      type: GET_EXPENSES_PENDING
    });

    return getExpensesAPI()
      .then(response => {
        // sikeres lekerdezes, jelezzuk hogy 'success' es tovabbitjuk az eredmenyt
        dispatch({
          type: GET_EXPENSES_SUCCESS,
          value: response.data
        })
      })
      .catch(error => {
        // hiba eseten, jelezzuk hogy 'fail' es tovabbitjuk az error objektum
        dispatch({
          type: GET_EXPENSES_FAIL,
          error
        })
      })

  }
}

const addExpense = (expense) => (dispatch) => {
  dispatch({
    type: POST_EXPENSE_PENDING
  });

  return addExpenseAPI(expense)
    .then((response) => {
      dispatch({
        type: POST_EXPENSE_SUCCESS,
        value: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: POST_EXPENSE_FAIL,
        error
      })
    })
}

export {
  getExpenses,
  addExpense
}
