/**
 * Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists.
Original list:
[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
Grouping a sequence of key-value pairs into a dictionary of lists:
{'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}
 */

// my sol
let dict = [['yellow', 1], ['blue', 2],['yellow', 3],['blue', 4],['red', 1]]
let obj = {}

for(let i=0; i<dict.length; i++) {
    if(dict[i][0] in obj) {
        obj[dict[i][0]].push(dict[i][1])
    }else{
        obj[dict[i][0]] = [dict[i][1]]
    }
    
}
console.log(obj)