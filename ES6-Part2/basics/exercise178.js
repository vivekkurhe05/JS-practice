/**
 * Write a JavaScript program to create a new object from the combination of two or more objects.
 * 
 * output:
 * {"a":[{"x":2},{"y":4},{"z":3}],"b":[1,2,3],"c":"foo"}
 */

// my sol
function merge(obj1, obj2) {
    let obj = {};
    for(let key in obj1) {
        obj[key] = obj1[key];
    }

    for(let key in obj2) {
        if(key in obj && Array.isArray(obj[key])) {
            obj[key].push(obj2[key]);
        }else if(typeof obj[key] === "number") {
            let arr = obj2[key];
            arr.push(obj[key]);
            arr.sort((a,b) => a-b);
            obj[key] = arr;
        }else {
            obj[key] = obj2[key];
        }
    }

    return obj;
}


const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};

console.log(merge(object, other));



