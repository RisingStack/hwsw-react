export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_EXPENSE = 'ADD_EXPENSE';

// action creator
export function increment(value) {
  return { type: INCREMENT, value }
}

export function addExpense(expense) {
  return { type: ADD_EXPENSE, value: expense }
}