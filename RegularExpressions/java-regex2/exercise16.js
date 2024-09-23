/**
 * Write a Java program to replace all the vowels in a given string with a specified character.
 */

// my solution
function validate(str){
    const re = /[aeiou]/gi
    return str.replace(re, "$")
}


console.log(validate("Hello there!! Count total number of vowels in a string"));
