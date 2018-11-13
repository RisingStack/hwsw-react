import { createStore } from 'redux';
import { INCREMENT, DECREMENT, increment } from './actions/actionTypes';

const countReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + action.value;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};

const store = createStore(countReducer);

store.subscribe(() => console.log('count:', store.getState()))

store.dispatch(increment(5))
store.dispatch({ type: DECREMENT, value: 3 })
store.dispatch({ type: DECREMENT, value: 2 })

export default store;