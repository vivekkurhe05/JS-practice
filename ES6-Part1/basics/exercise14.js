/**
 * Write a JavaScript program to replace multiple object keys' names with the values provided.
 */

// my sol
function rename_keys(newObj, obj) {
    let newKeys = Object.keys(newObj);
    let oldKeys = Object.keys(obj);
    let modifiedObj = {};
    
    for(let i=0;i<oldKeys.length;i++) {
        if(oldKeys.includes(newKeys[i])) {
            modifiedObj[newObj[newKeys[i]]] = obj[oldKeys[i]];
        }else{
            modifiedObj[oldKeys[i]] = obj[oldKeys[i]];
        }
    }

    return modifiedObj;

}

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);

result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);

/**
 * output
 * {firstname: 'Bobo', Actor: 'Programmer', shoeSize: 100}
 */

// or my sol

function rename_keys2(newObj, obj) {

    let newKeys = Object.keys(newObj); // ["name", "job"]
    let oldKeys = Object.keys(obj); // ["name", "job", "shoeSize"]
    console.log(newKeys);
    console.log(oldKeys);

    let arr = oldKeys.reduce((acc, cur, i) => {
        if(oldKeys.includes(newKeys[i])) {
            acc.push([newObj[cur], obj[cur]]);
        }else{
            acc.push([oldKeys[i], obj[cur]])
        }
        return acc
    }, []); // acc is an object here.

    return Object.fromEntries(arr);
}

const obj2 = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj2);

result = rename_keys2({ name: 'firstName', job: 'Actor' }, obj2);
console.log("New Object");
console.log(result);
