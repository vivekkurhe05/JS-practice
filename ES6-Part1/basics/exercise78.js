/**
 * Write a JavaScript program to invert the key-value pairs of an object, without mutating it. 
 * The corresponding inverted value of each inverted key is an array of keys responsible for 
 * generating the inverted value. If a function is supplied, it is applied to each inverted key.
 */

// correct this
function invertKeyValues(obj, fn) {
    let newObj = {};
    
    for(let key in obj) {
        if(!(obj[key] in newObj)) {

            newObj[obj[key]] = [key];
        }else{
            newObj[obj[key]].push(key);
            newObj[obj[key]] = newObj[obj[key]];
        }
    }
    
    return newObj;
}

console.log(invertKeyValues({ a: 1, b: 2, c: 1 })); // Outputs: { '1': ['a', 'c'], '2': ['b'] }
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value)); // Outputs: { group1: ['a', 'c'], group2: ['b'] }