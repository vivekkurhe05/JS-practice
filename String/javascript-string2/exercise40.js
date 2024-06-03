/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Test Data :
 * console.log(unCapitalize_Words('Js String Exercises'));
 * "js string exercises"
 */

function unCapitalize_Words(str){
    let regex = /[A-Z]/g
    return str.replace(regex, function(chr){
        return chr.toLowerCase()
    })
}

console.log(unCapitalize_Words('Js String Exercises'));