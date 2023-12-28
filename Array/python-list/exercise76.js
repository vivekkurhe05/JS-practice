/**
 * Write a Python program to create a list reflecting the modified run-length encoding 
 * from a given list of integers or a given list of characters.
Original list:
[1, 1, 2, 3, 4, 4, 5, 1]
List reflecting the modified run-length encoding from the said list:
[[2, 1], 2, 3, [2, 4], 5, 1]
Original String:
aabcddddadnss
List reflecting the modified run-length encoding from the said string:
[[2, 'a'], 'b', 'c', [4, 'd'], 'a', 'd', 'n', [2, 's']]
 */

function count_elem(arr) {
    
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        let count = 0
        if(arr[i] === arr[i+1]) {
            count+=2
            obj[arr[i]] = count
            
        }
    }
    return Object.entries(obj).map(arr => arr.reverse())
}

let list1 = [1, 1, 2, 3, 4, 4, 5, 1]
console.log(count_elem(list1))