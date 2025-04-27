/**
 * Write a Python program to sort a list alphabetically in a dictionary.
 */

let num = {
    'n1': [2, 3, 1], 
    'n2': [5, 1, 2], 
    'n3': [3, 2, 4]
}

for(let key in num) {
    num[key].sort((a,b)=>a-b)
}

console.log(num);