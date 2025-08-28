/**
 * Write a JavaScript program to convert a string from camelcase.
 */

function fromCamelCase(str, sep) {
    const re = /(?=[A-Z])/g;
    return str.replace(re, sep).toLowerCase();
}

console.log(fromCamelCase('someDatabaseFieldName', ' '));  
console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));  
console.log(fromCamelCase('someJavascriptProperty', '_'));  