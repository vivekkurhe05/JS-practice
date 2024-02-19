/**
 * Write a Python program to decode a run-length message.
Original encoded list:
[[2, 1], 2, 3, [2, 4], 5, 1]
Decode a run-length encoded said list:
[1, 1, 2, 3, 4, 4, 5, 1]
 */

// chat gpt
function decoding_runLength(arr) {

    let decode = []
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            let [count, value] = arr[i]
            for(let j=0;j<count;j++) {
                decode.push(value)
            }
        }else{
            decode.push(arr[i])
        }
    }

    return decode
}

let list = [[2, 1], 2, 3, [2, 4], 5, 1]
console.log(decoding_runLength(list))