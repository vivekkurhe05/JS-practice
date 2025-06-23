/**
 * Write a JavaScript program to get all unique values of an array, based on a provided comparator function.
 */

function uniqueElementsBy(arr, fn) {
    return arr.reduce((acc, cur) => {
        if(!acc.some(x => fn(cur, x))) acc.push(cur)
        return acc;
    }, []);
}

console.log(uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));  