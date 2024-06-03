/**
 * Write a Python program to round the numbers in a given list, 
 * print the minimum and maximum numbers and multiply the numbers by 5. 
 * Print the unique numbers in ascending order separated by space.
Original list: [22.4, 4.0, 16.22, 9.1, 11.0, 12.22, 14.2, 5.2, 17.5]
Minimum value: 4
Maximum value: 22
Result:
20 25 45 55 60 70 80 90 110
 */

// my solution
function unique_num(list) {
    list = list.map(el=>Math.round(el))
    list = list.sort((a,b)=>a-b)
    return list.map(el=>el*5).join(" ")
}

let list = [22.4, 4.0, 16.22, 9.1, 11.0, 12.22, 14.2, 5.2, 17.5]
console.log(unique_num(list))