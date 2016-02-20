export default (initialState = {}, action) => {
  if (action.type === 'ROOT_MOUNTED') {
    console.log(`I am an side effect of ! ${action.type}`);

    return Object.assign({}, initialState, {appValue: action.payload});
  }

  return initialState;
}
