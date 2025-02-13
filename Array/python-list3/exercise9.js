/**
 * Write a Python program to clone or copy a list.
 */

// my sol
function clone_array(arr) {
    let copiedArr = []
    for(let i=0;i<arr.length;i++) {
        copiedArr[i] = arr[i]
    }
    return copiedArr
}

console.log(clone_array([10, 22, 44, 23, 4]))