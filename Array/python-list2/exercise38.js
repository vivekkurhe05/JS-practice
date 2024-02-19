/**
 * Write a Python program to change the position of every n-th value to the (n+1)th in a list.
Sample list: [0,1,2,3,4,5]
Expected Output: [1, 0, 3, 2, 5, 4]
 */

function replace2copy(arr) {
    let el = arr.pop()
    arr.unshift(el)
    return arr
}

console.log(replace2copy([0,1,2,3,4,5]))