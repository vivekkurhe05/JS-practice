/**
 * Write a JavaScript function to capitalize each word in the string.
 * Test Data :
 * console.log(capitalizeWords('js string exercises'));
 * "JS STRING EXERCISES"
 */

function capitalizeWords(input) {
    return input.split(" ").map((word) => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}

console.log(capitalizeWords('js string exercises'));