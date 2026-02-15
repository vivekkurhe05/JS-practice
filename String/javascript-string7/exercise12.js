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

function uncamelize(input, sep=" ") {
    const re = /(?=[A-Z])/g;
    return input.replace(re,sep)
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

// or

function uncamelize2(input, sep) {
    const re = /(?=[A-Z])/g;
    if(sep === undefined) {
        sep = " ";
    }
    return input.replace(re,sep)
}

console.log(uncamelize2('helloWorld'));
console.log(uncamelize2('helloWorld','-'));
console.log(uncamelize2('helloWorld','_'));