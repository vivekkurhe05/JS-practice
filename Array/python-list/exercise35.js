/**
 * Write a Python program to create a list by concatenating a given list with a range from 1 to n.
Sample list : ['p', 'q']
n =5
Sample Output : ['p1', 'q1', 'p2', 'q2', 'p3', 'q3', 'p4', 'q4', 'p5', 'q5']
 */

// my solution
function range(arr, n) {
    let p = arr[0]
    let q = arr[1]
    arr.length = 0
    for(let i=1; i<=n; i++) {
        arr.push(p+i)
        arr.push(q+i)
    }
    return arr
}

console.log(range(['p', 'q'], 5))