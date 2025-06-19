/**
 * Write a JavaScript program to take any number of iterable objects or objects 
 * with a length property and return the longest one.
 */

// my sol
function longestItem(...args) {
    let max = args[0].length;

    args.map(el => {
        max = Math.max(el.length, max)
        return max;
    });

    return args.filter(el => {
        return el.length === max;
    })[0];
}

console.log(longestItem('this', 'is', 'a', 'testcase')); // Outputs: 'testcase'
console.log(longestItem(...['a', 'ab', 'abc'])); // Outputs: 'abc'
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd')); // Outputs: 'abcd'
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // Outputs: [1, 2, 3, 4, 5]
console.log(longestItem([1, 2, 3], 'foobar')); // Outputs: 'foobar'