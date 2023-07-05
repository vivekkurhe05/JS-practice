/**
 * Write a Python program to find the specified number of maximum values in a given dictionary.
Original Dictionary:
{'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 100}
1 maximum value(s) in the said dictionary:
['f']
2 maximum value(s) in the said dictionary:
['f', 'i']
5 maximum value(s) in the said dictionary:
['f', 'i', 'g', 'd', 'c']
 */

// my solution
function max_val(obj, num) {
    let arr = Object.entries(obj)
    arr =  arr.sort((a,b)=>b[1]-a[1]).slice(0, num)
    return arr.map(el=>el[0])
}

let obj = {
    'a': 5, 
    'b': 14, 
    'c': 32, 
    'd': 35, 
    'e': 24, 
    'f': 100, 
    'g': 57, 
    'h': 8, 
    'i': 100
}

console.log(max_val(obj, 1))
console.log(max_val(obj, 2))
console.log(max_val(obj, 5))

