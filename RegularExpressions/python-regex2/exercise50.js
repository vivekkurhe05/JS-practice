/**
 * Write a Python program to remove the parenthesis area in a string.
Sample data : ["example (.com)", "w3resource", "github (.com)", "stackoverflow (.com)"]
 */

// my solution
let data = [
    "example (.com)",
    "w3resource",
    "github (.com)",
    "stackoverflow (.com)",
  ];

  const re = /\(.+\)/g
data.forEach(el => console.log(el.replace(re, "")))