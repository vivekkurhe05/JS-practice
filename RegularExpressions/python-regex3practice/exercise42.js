/**
 * Write a Python program to find urls in a string.
 */

// my solution
text =
  '<p>Contents :</p><a href="https://w3resource.com">Python Examples</a><a href="http://github.com">Even More Examples</a>';

const re = /(http|https):\/\/[a-z0-9]+\.com/g
console.log(text.match(re))