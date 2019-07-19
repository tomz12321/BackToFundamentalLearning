// actions.js
export function showNotification(text) {
  return { type: 'SHOW_NOTIFICATION', text }
}
export function hideNotification() {
  return { type: 'HIDE_NOTIFICATION' }
}