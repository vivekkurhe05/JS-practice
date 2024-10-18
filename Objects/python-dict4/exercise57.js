/**
 * Write a Python program to filter even numbers from a dictionary of values.
Original Dictionary:
{'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
Filter even numbers from said dictionary values:
{'V': [4, 6, 10], 'VI': [4, 12], 'VII': [8]}
Original Dictionary:
{'V': [1, 3, 5], 'VI': [1, 5], 'VII': [2, 7, 9]}
Filter even numbers from said dictionary values:
{'V': [], 'VI': [], 'VII': [2]}
 */

// my solution
function evenOdd(obj){
    for(let key in obj){
        obj[key]=obj[key].filter(el=>el%2===0)
    }
    return obj
}

let obj1 = {'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
let obj2={'V': [1, 3, 5], 'VI': [1, 5], 'VII': [2, 7, 9]}
console.log(evenOdd(obj1))
console.log(evenOdd(obj2))