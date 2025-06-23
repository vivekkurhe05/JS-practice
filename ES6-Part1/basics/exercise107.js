/**
 * Write a JavaScript program to get all distinct values (from the right side of the array) 
 * of an array, based on a provided comparator function.
 * 
 * output:
 * [{"id":0,"value":"e"},{"id":1,"value":"d"},{"id":2,"value":"c"}]
 */

// w3resource sol
function uniqueElementsByRight(arr, fn) {
    return arr.reduceRight((acc, cur) => {
        if(!acc.some(x => fn(cur, x))) acc.push(cur)
        return acc;
    }, []);
}

console.log(uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));  