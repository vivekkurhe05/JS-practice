/**
 * Write a Python program to decode a run-length message.
Original encoded list:
[[2, 1], 2, 3, [2, 4], 5, 1]
Decode a run-length encoded said list:
[1, 1, 2, 3, 4, 4, 5, 1]
 */

// chat gpt
function decodeRunLength(encodedList) {
    let decoded = [];

    for (let i = 0; i < encodedList.length; i++) {
        if (Array.isArray(encodedList[i])) {
            let [count, value] = encodedList[i];
            for (let j = 0; j < count; j++) {
                decoded.push(value);
            }
        } else {
            decoded.push(encodedList[i]);
        }
    }

    return decoded;
}

// Test with the given encoded list
const encodedList = [[2, 1], 2, 3, [2, 4], 5, 1];
console.log("Original encoded list:");
console.log(encodedList);
console.log("Decoded a run-length encoded said list:");
console.log(decodeRunLength(encodedList));