/**
 * Write a JavaScript function to convert an object into a list of '[key, value]' pairs.
 */

function key_value_pairs(obj) {
    return Object.entries(obj)
}

console.log(
    key_value_pairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
  );