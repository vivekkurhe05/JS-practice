/**
 * Write a Python program to combine values in a list of dictionaries.
Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}]
Expected Output: Counter({'item1': 1150, 'item2': 300})
 */
let arr = [
    {'item': 'item1', 'amount': 400}, 
    {'item': 'item2', 'amount': 300}, 
    {'item': 'item1', 'amount': 750}
]

/**
 * {item1:}
 */
let result = arr.reduce((acc, curr) => {
    if(acc[curr.item]) {
        acc[curr.item] += curr.amount
    }else{
        acc[curr.item] = curr.amount
    }
    return acc
}, {})

console.log(result)