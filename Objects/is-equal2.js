function isEqual(obj1, obj2) {
    let obj1Len = Object.keys(obj1).length;
    let obj2Len = Object.keys(obj2).length;

    if(obj1Len === obj2Len) {
        return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
    }

    return false;
}

console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })); // true
console.log(isEqual({ a: 1, b: 1 }, { b: 1, a: 1 })); // true
console.log(isEqual({ a: 1, b: 1 }, { a: 1, c: 1 })); // false