/**
 * Write a Python program to pack consecutive duplicates of a given list of elements into sublists.
Original list:
[0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
After packing consecutive duplicates of the said list elements into sublists:
[[0, 0], [1], [2], [3], [4, 4], [5], [6, 6, 6], [7], [8], [9], [4, 4]]
 */

// fix this
let list = [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
let arr = []
for (let i=0; i<list.length; i++) {
    let sub_list = []
    if(list[i] === list[i+1]) {
        sub_list.push(list[i])
        sub_list.push(list[i+1])
    }
    
    arr.push(sub_list)
}

console.log(arr)