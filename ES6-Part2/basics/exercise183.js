/**
 * Write a JavaScript program to check if the provided argument is valid JSON.
 */

// my sol
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }catch(e) {
        return false;
    }
}

console.log(isValidJSON('{"name":"Adam","age":20}')); // true (valid JSON)
console.log(isValidJSON('{"name":"Adam",age:"20"}')); // false (invalid JSON)
console.log(isValidJSON(null)); // false (not a string)