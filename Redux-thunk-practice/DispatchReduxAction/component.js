// component.js
import { showNotification, hideNotification } from '../actions'

this.props.dispatch(showNotification('You just logged in.'))
setTimeout(() => {
  this.props.dispatch(hideNotification())
}, 5000)