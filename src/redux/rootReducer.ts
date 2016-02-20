export default (initialState = {}, action) => {
  console.log('handling action:' + action.type);

  return initialState;
}
