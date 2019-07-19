//store.js

store.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
setTimeout(() => {
  store.dispatch({ type: 'HIDE_NOTIFICATION' })
}, 5000)

/* 
 * 	this.props.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
 * 	setTimeout(() => {
 *  	this.props.dispatch({ type: 'HIDE_NOTIFICATION' })
 * 	}, 5000)
 */