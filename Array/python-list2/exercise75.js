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

// chat gpt
function runLengthEncoding(input) {
    let encoding = [];
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            encoding.push([count, input[i]]);
            count = 1;
        }
    }

    return encoding;
}

// Test with a list of integers
const integerList = [1, 1, 2, 3, 4, 4.3, 5, 1];
console.log("Original list:");
console.log(integerList);
console.log("List reflecting the run-length encoding from the said list:");
console.log(runLengthEncoding(integerList));

// Test with a string
const stringList = "automatically";
console.log("Original String:");
console.log(stringList);
console.log("List reflecting the run-length encoding from the said string:");
console.log(runLengthEncoding(stringList.split("")));
