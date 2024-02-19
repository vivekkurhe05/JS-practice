/**
 * Write a Python program to find the second largest number in a list.
 */

function second_largest(arr) {
    let newarr = new Set(arr)
    newarr = Array.from(newarr).sort((a,b) => b-a)
    if(newarr.length>1) return newarr[1]
    else return newarr[0]
}

console.log(second_largest([1,2,3,4,4]))
console.log(second_largest([1, 1, 1, 0, 0, 0, 2, -2, -2]))
console.log(second_largest([2,2]))
console.log(second_largest([1]))