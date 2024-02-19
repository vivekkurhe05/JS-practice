/**
 * Write a Python program to sort a list of nested dictionaries.
 */

// my solution
let my_list = [
    {'key': {'subkey': 1}}, 
    {'key': {'subkey': 10}}, 
    {'key': {'subkey': 5}}
]

console.log(my_list.sort((obj1,obj2)=>obj1.key.subkey - obj2.key.subkey))