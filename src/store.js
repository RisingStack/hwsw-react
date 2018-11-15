import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import countReducer from './reducers/countReducer';
import expenseReducer from './reducers/expenseReducer';
import { reduxLogger } from './utils/reduxLogger';

const rootReducer = combineReducers({
  count: countReducer,
  expense: expenseReducer
})

const middleware = [ thunk, reduxLogger ]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

// store.subscribe(() => console.log('count:', store.getState()))

// store.dispatch(increment(5))
// store.dispatch({ type: DECREMENT, value: 3 })
// store.dispatch({ type: DECREMENT, value: 2 })

export default store;
