/**
 * Write a Python program to get the top three items in a shop.
Sample data: {'item1': 45.50, 'item2':35, 'item3': 41.30, 'item4':55, 'item5': 24}
Expected Output:
item4 55
item1 45.5
item3 41.3
 */

// my solution
let obj = {'item1': 45.50, 'item2':35, 'item3': 41.30, 'item4':55, 'item5': 24}
let arr = Object.values(obj)
console.log(arr.sort((a,b)=>b-a).slice(0,3))