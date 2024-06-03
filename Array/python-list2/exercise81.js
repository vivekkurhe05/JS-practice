/**
 * Write a Python program to extract a given number of randomly selected elements from a given list.
Original list:
[1, 1, 2, 3, 4, 4, 5, 1]
Selected 3 random numbers of the above list:
[4, 4, 1]
 */

// my solution
function select_items(arr, num) {

    let result = []
    while(result.length<num) {
        let index = Math.floor(Math.random()*arr.length)
        result.push(arr[index])
    }
    return result
}

let list = [1, 1, 2, 3, 4, 4, 5, 1]
console.log(select_items(list,3))