/**
 * Write a Python program to iterate over dictionaries using for loops.
 */

// my solution
d = {'Red': 1, 'Green': 2, 'Blue': 3}

for(let prop in d) {
    if(d.hasOwnProperty(prop)){
        console.log(d[prop])
    }
}