/**
 * Write a JavaScript function to retrieve all the values of an object's properties.
 */

function all_values(obj) {
    let arr = Object.values(obj)
    return arr;
}

console.log(all_values({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
