/**
 * Write a Python program to sum all the items in a dictionary.
 */

my_dict = {'data1':100,'data2':-54,'data3':247}

let arr = Object.entries(my_dict)

let val = arr.reduce((acc, curr)=>{
    return acc+curr[1]
},0)

console.log(val)