/**
 * Write a Python program to convert a given list of lists to a dictionary.
Original list of lists:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
Convert the said list of lists to a dictionary:
{
    1: ['Jean Castro', 'V'], 
    2: ['Lula Powell', 'V'], 
    3: ['Brian Howell', 'VI'], 
    4: ['Lynne Foster', 'VI'], 
    5: ['Zachary Simon', 'VII']
}
 */

const arr = [
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
];

let obj = arr.reduce((acc, cur) => {
    if(!(cur[0] in acc)) {
        acc[cur[0]] = cur.slice(1);
    }
    return acc;
}, {});

console.log(obj);