/**
 * How to sort strings in JavaScript?
 * Original String
 *   Suraj, Sanjeev, Rajnish, Yash, Ravi
 * After sorting
 *   Rajnish, Ravi, Sanjeev, Suraj, Yash
 */

// my solution
function sort() {
    let args = Array.prototype.slice.call(arguments)
    return args.sort()
}

console.log(sort("Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"));
// console.log(sort(40, 100, 1, 5, 25, 10))


// my solution
function sort2(...args) {
    return args.sort()
}

console.log(sort2("Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"));