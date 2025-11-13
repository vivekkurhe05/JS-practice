/**
 * Write a Java program to test if a given string contains the specified sequence of char values.
 * 
 * Original String: PHP Exercises and Python Exercises                                                           
Specified sequence of char values: and                                                                        
true 
 */

// my sol
function containsCharSequence(str, chars) {
    if(str.includes(chars)) return true;
    return false;
}

console.log(containsCharSequence("PHP Exercises and Python Exercises", "and"));