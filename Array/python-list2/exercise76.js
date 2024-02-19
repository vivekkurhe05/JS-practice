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

// chat gpt
function encoding_runLength(list) {
    let result = []
    let count = 1


    for(let i=0;i<list.length;i++) {
        if(list[i] === list[i+1]) {
            count++
        }else {
            if(count===1) {
                result.push(list[i])
            }else{
                result.push([count, list[i]])
                count=1
            }
        }
    }
    return result
}

let list = [1, 1, 2, 3, 4, 4, 5, 1]
console.log(encoding_runLength(list))