/**
 * Write a Python program to find the length of a dictionary of values.
Original Dictionary:
{1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
Length of dictionary values:
{'red': 3, 'green': 5, 'black': 5, 'white': 5}
Original Dictionary:
{'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}
Length of dictionary values:
{'Austin Little': 13, 'Natasha Howard': 14, 'Alfred Mullins': 14, 'Jamie Rowe': 10}
 */

// my solution
function get_obj(obj){
    let new_obj={}
    for(let key in obj){
        new_obj[obj[key]] = obj[key].length
    }
    return new_obj
}

let ori_dic1={1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
let ori_dic2={'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}

console.log(get_obj(ori_dic1))
console.log(get_obj(ori_dic2))