import { createStore, combineReducers } from 'redux';
import { INCREMENT, DECREMENT, ADD_EXPENSE, increment } from './actions/actionTypes';

const countReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + action.value;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};

const expenseReducer = (state = { expenses: [] }, action) => {
  switch (action.type) {
    case ADD_EXPENSE: return {
      ...state,
      expenses: [ 
        ...state.expenses,
        Object.assign(
          action.value,
          { id: this.state.expenses[state.expenses.length - 1].id + 1 })
      ]
    }
    default: return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
  expense: expenseReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('count:', store.getState()))

// store.dispatch(increment(5))
// store.dispatch({ type: DECREMENT, value: 3 })
// store.dispatch({ type: DECREMENT, value: 2 })

export default store;