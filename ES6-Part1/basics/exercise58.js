/**
 * Write a JavaScript program to split values into two groups according to a predicate function. 
 * This specifies which group an element in the input collection belongs to.
 * 
 * // Output: [['beep', 'boop', 'bar'], ['foo']] 
 * (words starting with 'b' in the first group, others in the second group)
 */

// my sol
function bifurcateBy(arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : val => val[fn]) // map returns an array of boolean [true, true, false, true]
    .reduce((acc, cur, i) => {
        if(cur === true) {
            acc[0].push(arr[i])
        }else{
            acc[1].push(arr[i]);
        }
        return acc;
    }, [[], []]);
}

// Test case
console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));