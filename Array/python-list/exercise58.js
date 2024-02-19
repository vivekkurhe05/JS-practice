/**
 * Write a Python program to replace the last element in a list with another list.
Sample data : [1, 3, 5, 7, 9, 10], [2, 4, 6, 8]
Expected Output: [1, 3, 5, 7, 9, 2, 4, 6, 8]
 */

// my solution
function merge(arr1, arr2) {
    arr1.pop()
    let arr3 = arr1.concat(arr2)
    return arr3

}

let arr1 = [1, 3, 5, 7, 9, 10]
let arr2 = [2, 4, 6, 8]

console.log(merge(arr1, arr2))

// or

// my solution
function merge2(arr1, arr2) {
    arr1.splice(arr1.length-1,1,...arr2)
    return arr1
}

let list1 = [1, 3, 5, 7, 9, 10]
let list2 = [2, 4, 6, 8]

console.log(merge2(list1, list2))