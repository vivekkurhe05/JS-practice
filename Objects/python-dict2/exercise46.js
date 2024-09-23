/**
 * Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists.
Original list:
[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
Grouping a sequence of key-value pairs into a dictionary of lists:
{'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}
 */

// work on this
let arr = [['yellow', 1], ['blue', 2], ['yellow', 3], ['blue', 4], ['red', 1]]
let obj = {}

arr.forEach(el=> {
    if(!obj.hasOwnProperty(el[0])){
        obj[el[0]] = [el[1]]
    }
})

for(let i=0;i<arr.length;i++){
    if(arr[i][1] in obj[arr[i][0]]) return
    else obj[arr[i][0]].push(arr[i][1])
}
console.log(obj)