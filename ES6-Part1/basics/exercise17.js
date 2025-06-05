/**
 * Write a JavaScript program to split the values of two given arrays into two groups. 
 * If an element in the filter is true, the corresponding element in the collection belongs 
 * to the first group; otherwise, it belongs to the second group.
 */

// my sol
function bifurcate(intArr, boolArr) {
    let arr = [];
    let acc = [];
    let deletedEle = [];
    for(let i=0;i<intArr.length; i++) {
        if(boolArr[i] === false) {
            deletedEle.push(intArr[i])
        }else{
            acc.push(intArr[i]);   
        }
    }

    arr.push(acc, deletedEle);
    return arr;

}

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true])); // [[1, 2, 4], [3]]
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true])); // [[1, 2, 3, 4], []]
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false])); // [[], [1, 2, 3, 4]]