/**
 * Write a Python program to get the largest number from a list.
 */

// my sol
function max_num_in_list(arr) {
    return arr.sort((a,b) => b-a)[0]
}

console.log(max_num_in_list([10, 5, -8, 0]))

// or my sol

function max_num_in_list2(arr) {
    let max = arr[0]

    arr.map(el => {
        max = Math.max(max, el)
        return max
    })

    return max
}

console.log(max_num_in_list2([10, 5, -8, 0]))
