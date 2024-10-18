/**
 * Write a Python program to convert a given list of lists to a dictionary.
Original list of lists:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
Convert the said list of lists to a dictionary:
{
    1: ['Jean Castro', 'V'], 
    2: ['Lula Powell', 'V'], 
    3: ['Brian Howell', 'VI'], 
    4: ['Lynne Foster', 'VI'], 
    5: ['Zachary Simon', 'VII']
}
 */

// my solution
let arr = [
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
let obj = {}

arr.forEach(subarr => {
    obj[subarr[0]] = subarr.slice(1)
})
console.log(obj)