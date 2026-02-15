/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Test Data :
 * console.log(unCapitalize_Words('Js String Exercises'));
 * "js string exercises"
 */

function unCapitalize_Words(input) {
    return input.split(" ").map(word=>word[0].toLowerCase()+word.slice(1)).join(" ");
}

console.log(unCapitalize_Words('Js String Exercises'));