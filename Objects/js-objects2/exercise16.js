/**
 * Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
 */

let arr = [
    ["red", "#FF0000"],
    ["green", "#00FF00"],
    ["white", "#FFFFFF"],
  ];

let newArr = arr.map((subarr, i) => {
    let obj = {}
    subarr.reverse()
    obj[subarr[0]] =subarr[1]
    return obj
})
console.log(newArr)