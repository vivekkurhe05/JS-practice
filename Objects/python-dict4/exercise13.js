/**
 * Write a Python program to map two lists into a dictionary.
 */

// my solution
keys = ['red', 'green', 'blue']
values = ['#FF0000','#008000', '#0000FF']
let obj = {}
if(keys.length === values.length){
    for(let i=0;i<keys.length; i++){
        obj[keys[i]] = values[i]
    }
}else{
    console.log("Keys are not equal to values")
}
console.log(obj)

// or my solution

let arr = keys.map((key,i) => {
    return [key, values[i]]
})
console.log(Object.fromEntries(arr))