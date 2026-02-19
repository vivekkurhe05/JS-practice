/**
 * Write a Python program to reverse a string.
 */

function reverse_string(str) {

    return Array.from(str).reverse().join("")
    
}

console.log(reverse_string("w3resource"))

// or

function reverse_string2(str) {

    let arr = Array.from(str);
    let rev = "";
    let i = arr.length;
    do {
        i = i-1;
        let del = arr.splice(i,1);
        rev+=del;
    }while(i >= 0)

    return rev;
}

console.log(reverse_string2("w3resource"))