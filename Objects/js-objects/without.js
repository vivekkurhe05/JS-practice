/**
 * Write a method that returns a new object without provided properties
 * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 */

function without(obj, prop) {
    delete obj[prop]
    return obj
}

console.log(without({ a: 1, b: 2 }, "b"));
