/**
 * Write a Python program to remove leading zeros from an IP address.
 */

// my solution
function remove_zeros(str) {
    const regex = /\b0+(?=[1-9])/g
    return str.replace(regex,"")
}

console.log(remove_zeros("216.08.094.196"));