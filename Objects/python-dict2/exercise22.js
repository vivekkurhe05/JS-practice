/**
 * Write a Python program to find the highest 3 values of corresponding keys in a dictionary.
 */

// my solution
let my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}
let arr = Object.entries(my_dict)

let obj = Object.fromEntries(arr.sort((a,b) => b[1] - a[1]).slice(0,3))
for(let key in obj){
    console.log(obj[key])
}
