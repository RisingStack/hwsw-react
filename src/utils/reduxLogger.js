export const reduxLogger = store => next => action => {
  console.group(action.type);
  console.info('DISPATCH', action)
  const result = next(action);
  console.log('STATE', store.getState())
  console.groupEnd()
  return result
}