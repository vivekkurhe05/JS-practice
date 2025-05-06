/**
 * Write a JavaScript function to check whether an object contains given property.
 */

function hasKey(obj, prop) {
    return obj !=null && hasOwnProperty.call(obj, key);
}

console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));