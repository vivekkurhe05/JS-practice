/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Test Data :
 * console.log(unCapitalize_Words('Js String Exercises'));
 * "js string exercises"
 */

// my solution
function unCapitalize_Words(str){
    const re = /[A-Z]/g
    return str.replace(re, function(chr) {
        return chr.toLowerCase()
    })
}

console.log(unCapitalize_Words('Js String Exercises'));