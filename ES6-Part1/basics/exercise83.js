/**
 * Write a JavaScript program to create an updated string with the results of calling a 
 * provided function on every character in the called string.
 */

// my sol
function mapString(str, callback) {
    return str.split("").map(callback).join("");
}

console.log(mapString('Javascript exercises', c => c.toUpperCase())); // Outputs: "JAVASCRIPT EXERCISES"