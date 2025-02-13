/**
 * Write a JavaScript function to retrieve all the values of an object's properties.
 */

function all_values(obj) {
    return Object.values(obj)
}

console.log(all_values({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
