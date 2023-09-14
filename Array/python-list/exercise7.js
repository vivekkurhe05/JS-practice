/**
 * Write a Python program to remove duplicates from a list.
 */

// my solution
function remove_duplicates(arr) {
    let newarr = []
    for(let i=0; i<arr.length; i++) {
        if(!newarr.includes(arr[i])) newarr.push(arr[i])
    }
    return newarr
}
console.log(remove_duplicates([10,20,30,20,10,50,60,40,80,50,40]))
