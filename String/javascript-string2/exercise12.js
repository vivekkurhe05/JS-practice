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

function uncamelize(str, sep){
    let regex = /(?=[A-Z])/g
    if(sep===undefined) sep=" "
    return str.replace(regex,sep)
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));