/**
 * Write a JavaScript program to mutate the original array to filter out the values specified, 
 * based on a given iterator function.
 * 
 * Output: [{"x":2}]
 */

// todo
function pullBy(arrToModify, arrOfEl, fn) {

    const uniqueData = {};
    const uniqueValueSet = new Set();

    for(let key in arrToModify) {
        let data = arrToModify[key];
        let dataString = JSON.stringify(data);

        if(!uniqueValueSet.has(dataString)) {
            uniqueValueSet.add(dataString);
            uniqueData[key] = data;
        }
    }

    console.log(Array.from(uniqueValueSet));
}

var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x);

console.log(myArray);
