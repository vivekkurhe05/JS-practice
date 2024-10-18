/**
 * Write a Python program to convert a dictionary into a list of lists.
Original Dictionary:
{1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
Convert the said dictionary into a list of lists:
[[1, 'red'], [2, 'green'], [3, 'black'], [4, 'white'], [5, 'black']]
Original Dictionary:
{'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}
Convert the said dictionary into a list of lists:
[['1', 'Austin Little'], ['2', 'Natasha Howard'], ['3', 'Alfred Mullins'], ['4', 'Jamie Rowe']]
 */

// my solution
function get_obj(obj){
    let parent_arr =[]
    for(let key in obj){
        let sub_arr=[]
        sub_arr.push(parseInt(key),obj[key])
        parent_arr.push(sub_arr)
    }
    return parent_arr
}
let obj1 = {1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
let obj2={'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}

console.log(get_obj(obj1))
console.log(get_obj(obj2))