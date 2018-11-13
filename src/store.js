import { createStore, combineReducers } from 'redux';

import countReducer from './reducers/countReducer';
import expenseReducer from './reducers/expenseReducer';

const rootReducer = combineReducers({
  count: countReducer,
  expense: expenseReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => console.log('count:', store.getState()))

// store.dispatch(increment(5))
// store.dispatch({ type: DECREMENT, value: 3 })
// store.dispatch({ type: DECREMENT, value: 2 })

export default store;