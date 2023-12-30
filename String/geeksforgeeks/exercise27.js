/**
 * Convert comma separated string to array using JavaScript
 */

// my solution
function convertStringToArray(str) {
    return str.trim().split(",")
}

console.log(convertStringToArray("One,Two,Three,Four,Five"));
