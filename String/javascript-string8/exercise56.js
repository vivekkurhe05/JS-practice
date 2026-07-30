/**
 * Write a JavaScript function to check whether a string is a Pangram or not.
 * A pangram sentence is a sentence using every letter of alphabets at least once.
 */

function test(str) {

    if(typeof str !== "string") return "It must be a string";

    let result = new Set();
    for(let ch of str.toUpperCase()) {
        if(/[A-Z]/.test(ch)) {
            result.add(ch);
        }
    }

    return result.size === 26;
}

console.log(test("The quick brown fox jumps over the lazy dog"));
console.log(test("Waltz, bad nymph, for quick jigs vex."));
console.log(test("The five boxing wizards jump quickly."));
console.log(test("The boxing wizards jump quickly."));
console.log(test(12356));


// or

function test2(str) {
    if(toString.call(str) !== "[object String]") return "Not a string";

    str = str.toUpperCase();
    const re = /[A-Z]/;
    let arr = [];
    for(let chr of str) {
        if(re.test(chr)) {
            arr.push(chr);
        }
    }

    return new Set(arr).size === 26;
}

console.log(test2("The quick brown fox jumps over the lazy dog"));
console.log(test2("Waltz, bad nymph, for quick jigs vex."));
console.log(test2("The five boxing wizards jump quickly."));
console.log(test2("The boxing wizards jump quickly."));
console.log(test2(12356));