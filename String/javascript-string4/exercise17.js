/**
 * 
 * Write a JavaScript function to chop a string into chunks of a given length.
 * Test Data :
 * console.log(string_chop('w3resource'));
 * console.log(string_chop('w3resource',2));
 * console.log(string_chop('w3resource',3));
 * ["w3resource"]
 * ["w3", "re", "so", "ur", "ce"]
 * ["w3r", "eso", "urc", "e"]
 */

// my sol
function string_chop(str, num) {
    const re = new RegExp("\\w{1,"+num+"}","g")
    if(num===undefined) return [str]
    return str.match(re)
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));