/**
 * Write a JavaScript program to check if the given argument is a symbol.
 */

function isSymbol(val) {
    return typeof val === "symbol";
}

console.log(isSymbol(Symbol('x'))); // true (Symbol('x') is a symbol)
console.log(isSymbol(Symbol(1)));   // true (Symbol(1) is a symbol)
console.log(isSymbol(Symbol(')'))); // true (Symbol(')') is a symbol)