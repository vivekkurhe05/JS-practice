/**
 * Write a Python program to remove leading zeros from an IP address.
output:
255.24.1.1
127.0.0.1
 */

// my sol
function remove_zeros_from_ip(str) {
    const re = /0+(?=[1-9])/g
    return str.replace(re,"")
}

console.log(remove_zeros_from_ip("255.024.01.01"))
console.log(remove_zeros_from_ip("127.0.0.01"))