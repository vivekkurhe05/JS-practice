/**
 * Write a JavaScript program to check whether the provided value is of the specified type.
 */

function is(type, val) {
    return ![null].includes(val) && val.constructor === type;
}

console.log(is(Array, [1])); // true (Array instance)
console.log(is(ArrayBuffer, new ArrayBuffer())); // true (ArrayBuffer instance)
console.log(is(Map, new Map())); // true (Map instance)
console.log(is(RegExp, /./g)); // true (RegExp instance)
console.log(is(Set, new Set())); // true (Set instance)
console.log(is(WeakMap, new WeakMap())); // true (WeakMap instance)
console.log(is(WeakSet, new WeakSet())); // true (WeakSet instance)
console.log(is(String, '')); // true (String instance)
console.log(is(String, new String(''))); // true (String instance)
console.log(is(Number, 1)); // true (Number instance)
console.log(is(Number, new Number(1))); // true (Number instance)
console.log(is(Boolean, true)); // true (Boolean instance)
console.log(is(Boolean, new Boolean(true))); // true (Boolean instance)
console.log(is(Boolean, "abc")); // false (String instance)
console.log(is(Array, null)); 