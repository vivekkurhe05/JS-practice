/**
 * Write a Python program to get the smallest number from a list.
 */

// my sol
function min_num_in_list(arr) {
    return arr.sort((a,b) =>a-b)[0]
}

console.log(min_num_in_list([10, 5, -2, 0]))

// or my sol

function min_num_in_list2(arr) {
    let min = arr[0]

    arr.map(el => {
        min = Math.min(min, el)
        return min
    })

    return min
}

console.log(min_num_in_list2([10, 5, -2, 0]))