/**
 * Write a JavaScript program to group array elements based on the given function. 
 * It return the count of elements in each group.
 * 
 * Output:
 * {"10":1,"2.449489742783178":1,"3.1622776601683795":2}
   {"4":1,"6":2}
   {"3":2,"5":1}
 */

// w3resource sol
function countBy(arr, fn) {

    return arr.map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
}

console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(['one', 'two', 'three'], 'length'));