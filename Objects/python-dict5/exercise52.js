/**
 * Write a Python program to extract a list of values from a given list of dictionaries.
Original Dictionary:
[{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}]
Extract a list of values from said list of dictionaries where subject = Science
[92, 94, 88]
Original Dictionary:
[{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}]
Extract a list of values from said list of dictionaries where subject = Math
[90, 89, 92]
 */

const arr = [{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}];
const values = [];
arr.filter(obj => {
    if(obj['Science']){
        values.push(obj['Science']);
    }
    return values;
});

console.log(values);

// or

const math = arr.reduce((acc, cur) => { // where acc is an array and cur iterates over each obj
    if(cur['Math']) {
        acc.push(cur['Math']);
    }
    return acc;
}, []);

console.log(math);