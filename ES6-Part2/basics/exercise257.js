/**
 * Write a JavaScript program to convert a 2D array to a comma-separated value (CSV) string.
 */

// w3resource sol
function arrayToCSV(arr, delimeter=",") {
    return arr.map(el => el.map(x => `"${x}"`).join(delimeter)).join("\n");
}

console.log(arrayToCSV([['a', 'b'], ['c', 'd']])); // "a","b"\n"c","d" (CSV string with default delimiter ',')
console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';')); // "a";"b"\n"c";"d" (CSV string with custom delimiter ';')