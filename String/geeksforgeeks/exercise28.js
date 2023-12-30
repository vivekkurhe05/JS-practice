/**
 * How to convert an object to string using JavaScript?
 */

function convertObjectToString(obj) {
    return typeof JSON.stringify(obj)
}

let obj = {
    name: "Vivek",
    age: 30
}
console.log(convertObjectToString(obj));