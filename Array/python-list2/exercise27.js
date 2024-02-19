/**
 * Write a Python program to find the second smallest number in a list.
 */

function second_smallest(arr) {
    let newarr = new Set(arr)
    newarr = Array.from(newarr).sort((a,b)=> {
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })
    if(newarr.length > 1) return newarr[1]
    else return newarr[0]
}

console.log(second_smallest([1, 2, -8, -2, 0, -2]))
console.log(second_smallest([1, 1, 0, 0, 2, -2, -2]))
console.log(second_smallest([1, 1, 1, 0, 0, 0, 2, -2, -2]))
console.log(second_smallest([2,2]))
console.log(second_smallest([2]))