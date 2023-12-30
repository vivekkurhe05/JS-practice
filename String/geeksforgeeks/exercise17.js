/**
 * How to pad a string to get the determined length using JavaScript ?
 */

// my solution
function pad_string(str, pad_str, len) {
    return str.padStart(len, pad_str)
}

console.log(pad_string('abcdefg', '*', 10));
console.log(pad_string('1234', '^#', 10));

// or my solution

function pad_string2(str, pad_str, len) {
    
    while(str.length < len) {
        str = pad_str + str
    }
    return str
}

console.log(pad_string2('abcdefg', '*', 10));
console.log(pad_string2('1234', '^#', 10));