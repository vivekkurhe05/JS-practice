/**
 * Write a JavaScript function to check a given value contains alpha, dash and underscore.
 *
 */

// my solution
function is_alphaDash(str){
    const re = /^[\w-]+$/g
    return re.test(str)
}

console.log(is_alphaDash("12-133"));

console.log(is_alphaDash("100_23"));
