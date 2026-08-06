/**
 * Write a Python program to reverse a string.
 */

function reverse_string(str) {

    return str.split("").reverse().join("");
    
}

console.log(reverse_string("w3resource"))

// or

function reverse_string2(str) {

    let chars = Array.from(str);
    let result = "";
    chars.forEach((chr,i,arr) => {
        while(arr.length > 0) {

            let delChar = arr.pop();
            result+=delChar;
        }
    });

    return result;

}

console.log(reverse_string2("w3resource"))