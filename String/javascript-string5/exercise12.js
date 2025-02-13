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

function uncamelize(str, sep=" ") {
    const re = /\B(?=[A-Z])/g
    return str.replace(re,sep).toLowerCase()
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));