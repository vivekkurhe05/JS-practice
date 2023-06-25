/**
 * Write a Python program to count the number of items in a dictionary value that is a list.
 */

// my solution
let dict =  {
    'Alex': ['subj1', 'subj2', 'subj3'], 
    'David': ['subj1', 'subj2']
}

let count = 0;
for(let key in dict) {
    count+=dict[key].length
}
console.log(count)