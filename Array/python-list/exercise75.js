/**
 * Write a Python program to create a list reflecting the run-length encoding from a 
 * given list of integers or a given list of characters.
Original list:
[1, 1, 2, 3, 4, 4.3, 5, 1]
List reflecting the run-length encoding from the said list:
[[2, 1], [1, 2], [1, 3], [1, 4], [1, 4.3], [1, 5], [1, 1]]
Original String:
automatically
List reflecting the run-length encoding from the said string:
[[1, 'a'], [1, 'u'], [1, 't'], [1, 'o'], [1, 'm'], [1, 'a'], [1, 't'], [1, 'i'], [1, 'c'], [1, 'a'], [2, 'l'], [1, 'y']]
 */

// fix this
function count_elem(arr) {
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        let count = 0
        let index = arr.indexOf(arr[i])

        while(index != -1) {
            count++
            index = arr.indexOf(arr[i], index+1)
            obj[arr[i]] = count
        }
    }
    return Object.entries(obj).map(el => el.reverse())
}


let list1 = [1, 1, 2, 3, 4, 4.3, 5, 1]
let str = "automatically"
console.log(count_elem(list1))
console.log(count_elem(str))