/**
 * 83. Write a Python program to round every number in a given list of numbers and print the 
 * total sum multiplied by the length of the list.
Original list: [22.4, 4.0, -16.22, -9.1, 11.0, -12.22, 14.2, -5.2, 17.5]
Result:
243
 */

// my solution
function round_and_sum(arr) {
    arr = list.map(el=>Math.round(el))
    return arr.reduce((acc,val)=>acc+val)*arr.length
}

let list = [22.4, 4.0, -16.22, -9.1, 11.0, -12.22, 14.2, -5.2, 17.5]
console.log(round_and_sum(list))