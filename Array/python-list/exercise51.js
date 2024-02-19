/**
 * Write a Python program to split a list every Nth element.
Sample list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
Expected Output: [['a', 'd', 'g', 'j', 'm'], ['b', 'e', 'h', 'k', 'n'], ['c', 'f', 'i', 'l']]
 */

// fix this
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
let parent_arr = []

for(let i=0;i<arr.length;i+=3) {
    parent_arr.push(arr[i])
}
console.log(parent_arr)

// let str = arr.join("")
// let regex = /\w{1,5}/g
// console.log(str.match(regex))