/**
 * Write a program to return indexes of "e" char
 */

let str = "w3resource"

let index = str.indexOf("e")
while(index != -1) {
    console.log(`Found at ${index}`)
    index = str.indexOf("e", index+1)
}

// or my solution

let str2 = "w3resource"
const regex = /e/g;
while(regex.test(str2)) {
    console.log("Found at "+(regex.lastIndex-1))
} 