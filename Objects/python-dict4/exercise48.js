/**
 * Write a Python program to remove a specified dictionary from a given list.
Original list of dictionary:
[{'id': '#FF0000', 'color': 'Red'}, {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
Remove id #FF0000 from the said list of dictionary:
[{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
 */

// my solution
let arr = [
    {'id': '#FF0000', 'color': 'Red'}, 
    {'id': '#800000', 'color': 'Maroon'}, 
    {'id': '#FFFF00', 'color': 'Yellow'}, 
    {'id': '#808000', 'color': 'Olive'}
]

arr.filter((obj,i) => {
    if(obj['id'] === '#FFFF00') {
        delete arr.splice(i,1)
    }else{
        return obj
    }
})
console.log(arr)