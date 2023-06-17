/**
 * Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 */

// my solution
function makePairs(obj) {
    return Object.entries(obj)
}

console.log(makePairs({ a: 1, b: 2 }));