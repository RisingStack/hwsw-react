import { INCREMENT } from './actionTypes';

// action creator
export function incrementAsync(value, timeoutInMS = 1000) {
  // return { type: INCREMENT, value }

  return function (dispatch, getState) {
    setTimeout(() => { 
      dispatch({ type: INCREMENT, value })
    }, timeoutInMS)
  }
}

// const fn = () => (value, timeoutInMS = 1000) => (dispatch, getState) =>
//     setTimeout(() => { 
//       dispatch({ type: INCREMENT, value })
//     }, timeoutInMS)