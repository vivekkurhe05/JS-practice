/**
 * Write a Python program to remove consecutive (following each other continuously) duplicates (elements) from a given list.
Original list:
[0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
After removing consecutive duplicates:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4]
 */

// chat gpt
function removeConsecutiveDuplicates(list) {
    let result = [];
    let prev = null;

    for (let i = 0; i < list.length; i++) {
        if (list[i] !== prev) {
            result.push(list[i]);
            prev = list[i];
        }
    }

    return result;
}

const originalList = [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4];
const resultList = removeConsecutiveDuplicates(originalList);
console.log("Original list:");
console.log(originalList);
console.log("After removing consecutive duplicates:");
console.log(resultList);