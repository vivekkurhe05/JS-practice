/**
 * Write a Python program to invert a dictionary with unique hashable values.
Sample Output:
{10: 'Theodore', 11: 'Mathew', 9: 'Roxanne'}
 */

// my solution
let obj = {10: 'Theodore', 11: 'Mathew', 9: 'Roxanne'}
let inverted_dic = {}
for(let key in obj){
    inverted_dic[obj[key]] = key
}
console.log(inverted_dic)