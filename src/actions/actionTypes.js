export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const GET_EXPENSES_PENDING = 'GET_EXPENSES_PENDING';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAIL = 'GET_EXPENSES_FAIL';

// action creator
// export function increment(value) {
//   return { type: INCREMENT, value }
// }

export function addExpense(expense) {
  return { type: ADD_EXPENSE, value: expense }
}