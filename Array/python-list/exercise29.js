/**
 * Write a Python program to get unique values from a list.
 */

let my_list = [10, 20, 30, 40, 20, 50, 60, 40]
let unique_values = []

for(let i=0;i<my_list.length;i++) {
    if(!unique_values.includes(my_list[i])) unique_values.push(my_list[i])
}
console.log(unique_values)