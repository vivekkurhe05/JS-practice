/**
 * Write a Python program to clone or copy a list.
 */

// my solution
function clone_array(arr) {
    let newarr = []
    for(let i=0; i<arr.length; i++) {
        newarr[i] = arr[i]
    }
    return newarr
}

console.log(clone_array([10, 22, 44, 23, 4]))