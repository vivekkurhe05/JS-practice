/**
 * Write a Python program to pack consecutive duplicates of a given list of elements into sublists.
Original list:
[0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
After packing consecutive duplicates of the said list elements into sublists:
[[0, 0], [1], [2], [3], [4, 4], [5], [6, 6, 6], [7], [8], [9], [4, 4]]
 */

// chat GPT
function packDuplicates(list) {
    let packedList = [];
    let sublist = [];

    for (let i = 0; i < list.length; i++) {
        if (i === 0 || list[i] !== list[i - 1]) {
            // Start a new sublist when encountering a new element or the first element
            if (sublist.length > 0) {
                packedList.push(sublist);
            }
            sublist = [list[i]];
        } else {
            // Add consecutive duplicates to the current sublist
            sublist.push(list[i]);
        }
    }

    // Add the last sublist
    if (sublist.length > 0) {
        packedList.push(sublist);
    }

    return packedList;
}

const originalList = [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4];
const packedList = packDuplicates(originalList);
console.log("Original list:");
console.log(originalList);
console.log("After packing consecutive duplicates of the said list elements into sublists:");
console.log(packedList);
