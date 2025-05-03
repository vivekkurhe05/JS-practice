/**
 * Write a Python program to convert a list of dictionaries into a list of values corresponding to the specified key.
Sample Output:
Original list of dictionaries:
[{'name': 'Theodore', 'age': 18}, {'name': 'Mathew', 'age': 22}, {'name': 'Roxanne', 'age': 20}, {'name': 'David', 'age': 18}]
Convert a list of dictionaries into a list of values corresponding to the specified key:
[18, 22, 20, 18]
 */

const arr = [
    {'name': 'Theodore', 'age': 18}, 
    {'name': 'Mathew', 'age': 22}, 
    {'name': 'Roxanne', 'age': 20}, 
    {'name': 'David', 'age': 18}
];

let list = arr.reduce((acc, cur) => ( cur.age ? acc.push(cur.age) : undefined, acc), []);

console.log(list);

// or

let list2 = arr.reduce((acc, cur) => {
    if(cur.age) acc.push(cur.age)
    return acc;
}, []);

console.log(list2);