/**
 * Write a Python program to print the index of a character in a string.
Sample string: w3resource
Expected output:
Current character w position at 0
Current character 3 position at 1
Current character r position at 2
- - - - - - - - - - - - - - - - - - - - - - - - -
Current character c position at 8
Current character e position at 9
 */

let str1='w3resource'
for(let i=0;i<str1.length;i++) {
    console.log(`Current character ${str1[i]} position at ${i}`)
}