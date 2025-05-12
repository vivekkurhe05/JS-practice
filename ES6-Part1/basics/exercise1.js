/**
 * Write a JavaScript program to compare two objects to determine 
 * if the first contains equivalent property values to the second one.
 */

function matches(obj1, obj2) {

    return Object.keys(obj2).every((key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]);

}

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false