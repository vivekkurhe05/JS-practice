/**
 * Write a Python program to remove duplicates from a list of lists.
Sample list : [[10, 20], [40], [30, 56, 25], [10, 20], [33], [40]]
New List : [[10, 20], [30, 56, 25], [33], [40]]
 */

// my solution
let list = [[10, 20], [40], [30, 56, 25], [10, 20], [33], [40]]
let newList = []
let obj = {}

for(let i=0;i<list.length;i++) {
    obj[list[i]] = list[i]
}

for(let prop in obj) {
    newList.push(obj[prop])
}

newList.sort((sublist1, sublist2)=>sublist1[0] - sublist2[0])

console.log(newList)