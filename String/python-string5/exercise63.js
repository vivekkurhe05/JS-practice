/**
 * Write a Python program to remove leading zeros from an IP address.
output:
255.24.1.1
127.0.0.1
 */

function remove_zeros_from_ip(str) {
    const re = /\b0(?=\d)/g
    return str.replace(re,"")
}

console.log(remove_zeros_from_ip("255.024.01.01"))
console.log(remove_zeros_from_ip("127.0.0.01"))