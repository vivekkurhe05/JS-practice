/**
 * Write a JavaScript program to create an object from the specified object, where all keys are in lowercase.
 */

// my sol
function lowercaseKeys(obj) {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur.toLowerCase()] = obj[cur];

        return acc;
    }, {});
}

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
console.log(lowercaseKeys(myObj));

// or

function lowercaseKeys2(obj) {
    let result = {};
    for(let key in obj) {
        result[key.replace(/\s/g,"")] = obj[key];
    }
    return result;
}

const myObj2 = { "first name": 'Adam', "last name": 'Smith' };
console.log(lowercaseKeys2(myObj2));