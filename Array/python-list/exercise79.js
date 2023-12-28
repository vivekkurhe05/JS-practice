/**
 * Write a Python program to remove the K'th element from a given list, and print the updated list.
Original list:
[1, 1, 2, 3, 4, 4, 5, 1]
After removing an element at the kth position of the said list:
[1, 1, 3, 4, 4, 5, 1]
 */

// my solution
function remove_kth_elem(arr, index) {

    arr.splice(index,1)
    return arr
}
console.log(remove_kth_elem([1, 1, 2, 3, 4, 4, 5, 1],2))