/**
 * Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
 */

// w3resource sol
function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}
function display_message() {
  console.log('Hello!');
}
invokeAfterDelay(display_message);