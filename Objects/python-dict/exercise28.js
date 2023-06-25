/**
 * Write a Python program to sort a list alphabetically in a dictionary.
 */

// my solution
let num = {
    'n1': [2, 3, 1], 
    'n2': [5, 1, 2], 
    'n3': [3, 2, 4]
}

for (let key in num) {

    let arr=num[key].sort((a,b)=>a-b)
    num[key]=arr
}
console.log(num)