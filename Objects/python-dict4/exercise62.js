/**
 * Write a Python program to extract values from a given dictionary and create a list of lists from those values.
Original Dictionary:
[{'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'}, {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}]
Extract values from the said dictionarie and create a list of lists using those values:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
[
    [1, 'Jean Castro'], 
    [2, 'Lula Powell'], 
    [3, 'Brian Howell'], 
    [4, 'Lynne Foster'], 
    [5, 'Zachary Simon']
]
[
    ['Jean Castro', 'V'], 
    ['Lula Powell', 'V'], 
    ['Brian Howell', 'VI'], 
    ['Lynne Foster', 'VI'], 
    ['Zachary Simon', 'VII']
]
 */

// my solution
let arr = [
    {'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, 
    {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'}, 
    {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, 
    {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, 
    {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}
]

let list1 = [], list2 = [], list3=[]
arr.forEach(obj => {
    list1.push(Object.values(obj))
})
console.log(list1)

arr.forEach(obj => {
    Object.defineProperty(obj, 'class', {
        enumerable:false
    })
    list2.push(Object.values(obj))
})
console.log(list2)

arr.forEach(obj => {
    Object.defineProperties(obj, {
        student_id: {enumerable:false},
        class: {enumerable:true},
    })
    list3.push(Object.values(obj))
})
console.log(list3)