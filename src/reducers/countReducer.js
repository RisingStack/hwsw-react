import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const countReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + action.value;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};

export default countReducer;