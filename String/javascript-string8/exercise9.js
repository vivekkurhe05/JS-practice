/**
 * 
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

function capitalize_Words(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
}

console.log(capitalize_Words('js string exercises'));

// or

function capitalize_Words2(str) {
    const re = /\b[a-z]/g;
    return str.replace(re, (chr) => {
        return chr.toUpperCase();
    });
}

console.log(capitalize_Words2('js string exercises'));