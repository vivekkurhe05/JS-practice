/**
 * Write a Python program that returns a string sorted alphabetically by the first
character of a given string of words.
Sample Data:
("Red Green Black White Pink") -> "Black Green Pink Red White"
("Calculate the sum of two said numbers given as strings.") -> ("Calculate as given numbers of sum said strings. the two")
("The quick brown fox jumps over the lazy dog.") -> ("The brown dog. fox jumps lazy over quick the")
 */

function sort_alphabetically(str) {
    let arr = str.split(' ');
    return arr.sort().join(" ");
}

console.log(sort_alphabetically("Red Green Black White Pink"))
console.log(sort_alphabetically("Calculate the sum of two said numbers given as strings."))
console.log(sort_alphabetically("The quick brown fox jumps over the lazy dog."))