/**
 * Write a Python program to convert a given string to snake case.
 * 
 * output
 * java-script
    gd-script
    btw...-what-*-do*-you-call-that-naming-style?-snake-case?
 */

// do this
function snake_case(str) {
    const re = /\B(?=[A-Z][a-z])|\b[a-z]+/g
    return str.replace(re, function(chr) {
        return chr+"-"
    })
}

console.log(snake_case("JavaScript"));
console.log(snake_case("GDScript"));
console.log(snake_case("BTW...what *do* you call that naming style? snake_case? "));