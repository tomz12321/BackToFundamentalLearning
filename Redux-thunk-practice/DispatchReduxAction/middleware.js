// middleware

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// It still recognizes plain object actions
store.dispatch({ type: 'INCREMENT' })

// But with thunk middleware, it also recognizes functions
store.dispatch(function (dispatch) {
  // ... which themselves may dispatch many times
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })

  setTimeout(() => {
    // ... even asynchronously!
    dispatch({ type: 'DECREMENT' })
  }, 1000)
})

//source: https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// pracitce on 19/07/2019 Jyh-woei Yang (Tom)