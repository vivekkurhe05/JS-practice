/**
 * Write a JavaScript program to create a deep clone of an object.
 */

function deepClone(obj) {
    let b = Object.assign({}, obj);
    return b;
}

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a);  
console.log(b);