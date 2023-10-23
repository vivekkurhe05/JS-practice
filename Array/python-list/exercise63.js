/**
 * Write a Python program to insert a given string at the beginning of all items in a list.
Sample list : [1,2,3,4], string : emp
Expected output : ['emp1', 'emp2', 'emp3', 'emp4']
 */

// my solution
function prefix_emp(arr, str) {
    return arr.map(el => str+el)
}

let num = [1,2,3,4]
console.log(prefix_emp(num,"emp"))