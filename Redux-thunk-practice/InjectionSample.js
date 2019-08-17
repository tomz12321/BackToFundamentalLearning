//Injecting a Custom Argument
//Since 2.1.0, Redux Thunk supports injecting a custom argument using the withExtraArgument function:

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

// later
function fetchUser(id) {
  return (dispatch, getState, api) => {
    // you can use api here
  }
}