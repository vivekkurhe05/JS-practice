/**
 * Write a Java program to add a dash before and after every vowel in a given string.
 * 
 */

// my solution
function validate (str) {
    const re = /[aeiou]/gi
    return str.replace(re, (chr) => "-" + chr + "-" )
}

console.log(validate("C++")); // C++
console.log(validate("Java")); // J-a-v-a-
console.log(validate("MID-CENTRALIZED")); // M-I-D-C-E-NTR-A-L-I-Z-E-D
console.log(validate("LOWERED")); // L-O-W-E-R-E-D

// or

function validate2(str) {
    const re = /(?=[aeiou])|(?<=[aeiou])/gi;
    return str.replace(re,"-")
  }
    
    console.log(validate2("C++")); // C++
    console.log(validate2("Java")); // J-a-v-a-
    console.log(validate2("MID-CENTRALIZED")); // M-I-D-C-E-NTR-A-L-I-Z-E-D
    console.log(validate2("LOWERED")); // L-O-W-E-R-E-D