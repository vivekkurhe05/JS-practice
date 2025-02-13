/**
 * Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 */

function isEqual(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
        (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
    }
    return false;
}


console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })); // true
// console.log(isEqual({ a: 1, b: 1 }, { b: 1, a: 1 })); // true
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, c: 1 })); // false