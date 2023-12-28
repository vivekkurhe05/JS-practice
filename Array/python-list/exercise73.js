/**
 * Write a Python program to remove consecutive (following each other continuously) duplicates (elements) from a given list.
Original list:
[0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
After removing consecutive duplicates:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4]
 */

// my solution
let list = [0, 0, 1, 2, 3, 1, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
let new_list = []
for(let i=0; i<list.length; i++) {
    if(!new_list.includes(list[i]) || (list[i] != list[i-1] && list[i] != list[i+1])) {
        new_list.push(list[i])
    }
}

console.log(new_list)