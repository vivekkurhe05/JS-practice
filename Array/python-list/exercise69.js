/**
 * Write a Python program to remove duplicates from a list of lists.
Sample list : [[10, 20], [40], [30, 56, 25], [10, 20], [33], [40]]
New List : [[10, 20], [30, 56, 25], [33], [40]]
 */

// my solution
let list = [[10, 20], [40], [30, 56, 25], [10, 20], [33], [40]]
let list2 = []
let obj = {}

for (let i=0; i<list.length; i++) {
    obj[list[i]] = list[i]
}

for(let prop in obj) {
    list2.push(obj[prop])
}
console.log(list2.sort((a,b) => a[0]-b[0]))