/**
 * Write a Python program to find the key of the maximum value in a dictionary.
Sample Output:
Original dictionary elements:
{'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20}
Finds the key of the maximum and minimum value of the said dictionary:
('Roxanne', 'Theodore')
 */

function findKeysOfMinMaxValue(obj) {
    let arr = [];
    arr = Object.entries(obj);
    arr.sort((a,b) =>b[1]-a[1]);

    let val = [];
    val.push(arr[0][0], arr[arr.length-1][0]);
    return val;
}

const obj = {'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20};
console.log(findKeysOfMinMaxValue(obj))