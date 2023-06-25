/**
 * Write a Python program to map two lists into a dictionary.
 */

// my solution
keys = ['red', 'green', 'blue']
values = ['#FF0000','#008000', '#0000FF']

dict= {}
if(keys.length === values.length) {
    for(let i=0;i<keys.length; i++) {
        dict[keys[i]]=values[i]
    }
}
console.log(dict)

// or my solution

let arr = []
for(let i=0;i<3;i++){
    arr.push([keys[i],values[i]])
}
console.log(Object.fromEntries(arr))