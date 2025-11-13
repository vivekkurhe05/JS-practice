/**
 * Write a Java program to get the character at the given index within the string.
 * 
 * output
 * Original String = Java Exercises!                                                                             
The character at position 0 is J                                                                              
The character at position 10 is i 
 */

// my sol
function getCharAtIndex(str, i) {
    return str.charAt(i)
}

console.log(getCharAtIndex("Java Exercises!",0))
console.log(getCharAtIndex("Java Exercises!",10))