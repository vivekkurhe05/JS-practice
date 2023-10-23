/**
 * Write a Python program to sort a list of nested dictionaries.
 */

// my solution 
let my_list = [
    {'key': {'subkey': 1}}, 
    {'key': {'subkey': 10}}, 
    {'key': {'subkey': 5}}
]

console.log(my_list.sort((a,b) => b.key.subkey - a.key.subkey))