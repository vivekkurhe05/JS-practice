/**
 * Write a Python program to convert a list into a nested dictionary of keys.
 */

// w3resource solution
let num_list = [1, 2, 3, 4]
let new_dict=obj={}

for(let i=0;i<num_list.length;i++) {

    obj[num_list[i]] = {}
    obj = obj[num_list[i]]
}
console.log(new_dict)