/**
 * Write a Python program to count the frequency of a dictionary.
Original Dictionary:
{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
Count the frequency of the said dictionary:
Counter({10: 2, 40: 2, 20: 2, 70: 1, 80: 1})
*/

const obj = {'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20};
const arr = Object.values(obj);
const newObj = {};

for(let i=0; i<arr.length; i++) {
    let index = arr.indexOf(arr[i]);
    let count = 0;

    while(index !=-1) {
        count++;
        index = arr.indexOf(arr[i], index+1);
        newObj[arr[i]] = count;
    }
}

console.log(newObj);