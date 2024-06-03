/**
 * Write a Python program to Zip two given lists of lists.
Original lists:
[[1, 3], [5, 7], [9, 11]]
[[2, 4], [6, 8], [10, 12, 14]]
Zipped list:
[[1, 3, 2, 4], [5, 7, 6, 8], [9, 11, 10, 12, 14]]
 */

// my solution
let list1 = [[1, 3], [5, 7], [9, 11]]
let list2 = [[2, 4], [6, 8], [10, 12, 14]]

let zipped_list = list1.map((sublist,i) => sublist.concat(list2[i]))
console.log(zipped_list)