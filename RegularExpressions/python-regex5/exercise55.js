/**
 * Write a Python program to convert a given string to snake case.
 * 
 * output
 * java-script
    gd-script
    btw...-what-*-do*-you-call-that-naming-style?-snake-case?
 */

// my solution
function snake_case(str) {
   const re = /\s+(?=\*)?/g;
   return str.replace(re, "-").replace(/(\s+(?=\*)?)|(\B\-\B)/g,"")
}

console.log(snake_case("JavaScript"));
console.log(snake_case("GDScript"));
console.log(snake_case("BTW...what *do* you call that naming style? snake_case? "));