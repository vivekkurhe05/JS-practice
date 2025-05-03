/**
 * Write a Python program to invert a dictionary with unique hashable values.
input:
{10: 'Theodore', 11: 'Mathew', 9: 'Roxanne'}

output:
{ Roxanne: '9', Theodore: '10', Mathew: '11' }
 */

const obj = {10: 'Theodore', 11: 'Mathew', 9: 'Roxanne'};
const inverted_obj = {};

for(let key in obj) {
    inverted_obj[obj[key]] = key
}
console.log(inverted_obj);