/**
 * Write a Python program to combine values in a list of dictionaries.
Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}]
Expected Output: Counter({'item1': 1150, 'item2': 300})
 */

// chatgpt solution
let arr = [
    {
        'item': 'item1', 
        'amount': 400
    }, 
    {
        'item': 'item2', 
        'amount': 300
    }, 
    {
        'item': 'item1', 
        'amount': 750
    }
]

let result = arr.reduce((acc, curr)=>{
    if(acc[curr.item]){
        acc[curr.item] += curr.amount
    }else{
        acc[curr.item] = curr.amount
    }
    return acc
}, {})

console.log(result)

// or

let result2 = {};

arr.forEach(curr => {
    if (result2[curr.item]) {
        result2[curr.item] += curr.amount;
    } else {
        result2[curr.item] = curr.amount;
    }
});
console.log(result2)