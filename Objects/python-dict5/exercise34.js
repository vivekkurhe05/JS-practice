/**
 * Write a Python program to count the number of items in a dictionary value that is a list.
 */

let dict =  {
    'Alex': ['subj1', 'subj2', 'subj3'], 
    'David': ['subj1', 'subj2']
}

for(const key in dict) {
    console.log(dict[key].length);
}