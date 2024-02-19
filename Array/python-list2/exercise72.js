/**
 * Write a Python program to flatten a given nested list structure.
Original list: [0, 10, [20, 30], 40, 50, [60, 70, 80], [90, 100, 110, 120]]
Flatten list:
[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
 */

let list = [0, 10, [20, 30], 40, 50, [60, 70, 80], [90, 100, 110, 120]]

console.log(list.flat(Infinity))