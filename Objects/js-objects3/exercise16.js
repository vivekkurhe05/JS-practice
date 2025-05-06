/**
 * Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
 */

let arr = [
    ["red", "#FF0000"],
    ["green", "#00FF00"],
    ["white", "#FFFFFF"],
  ];

console.log(Object.fromEntries(arr.map(subarr => subarr.reverse())));