/**
 * 
 * Write a JavaScript function to uncamelize a string.
 * Test Data :
 * console.log(uncamelize('helloWorld'));
 * console.log(uncamelize('helloWorld','-'));
 * console.log(uncamelize('helloWorld','_'));
 * "hello world"
 * "hello-world"
 * "hello_world"
 */

// my sol
function uncamelize(str, op) {
    const re = /\B(?=[A-Z])/g
    return op != undefined ? str.replace(re, op): str.replace(re, " ")
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));