/**
 * Write a JavaScript function to check a given string is in Flat case or not.

Flat case: As the name implies, flatcase refers to the use of lowercase letters, 
with no spaces between words.
 */

function test(str) {
    if(!isNaN(str)) return "It must be a string";
    const re = /^[a-z]+$/;
    return re.test(str);
}

console.log(test('j'));
console.log(test('java exercises'));
console.log(test('JavaScriptExercises'));
console.log(test('javascriptexercises'));
console.log(test('12356'));