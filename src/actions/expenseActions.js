import { GET_EXPENSES_PENDING, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAIL } from './actionTypes';
import { getExpenses as getExpensesAPI } from '../api';

function getExpenses() {
  return function (dispatch) {
    // API hivas elott, jelezzuk hogy 'pending' az allapot
    dispatch({
      type: GET_EXPENSES_PENDING,
      value: []
    });

    getExpensesAPI()
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

export {
  getExpenses
}
