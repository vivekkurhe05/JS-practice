/**
 * Write a Python program to combine values in a list of dictionaries.
Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}]
Expected Output: Counter({'item1': 1150, 'item2': 300})
 */

const arr = [
    {'item': 'item1', 'amount': 400}, 
    {'item': 'item2', 'amount': 300}, 
    {'item': 'item1', 'amount': 750}
];

let obj = {};

arr.forEach((el) => {
    if(!(el.item in obj)) {
        obj[el.item] = el.amount;
    }else {
        obj[el.item] += el.amount;
    }
});

console.log(obj);