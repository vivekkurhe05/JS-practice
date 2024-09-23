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

data.forEach(el=>console.log(el.replace(new RegExp('\\(.+\\)',"g"),"")))