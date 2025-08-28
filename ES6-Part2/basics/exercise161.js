/**
 * Write a JavaScript program to mutate the original array to filter out the values specified. 
 * Returns the removed elements.
 */

// my sol
function pullAtValue(arr, elToRemove) {
    let deletedEl = [];

    arr.forEach((el, i) => {
        if(elToRemove.includes(el)) {
            let del = arr.splice(i,1);
            deletedEl.push(...del);
        }
    });

    return deletedEl;
}

let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); 

console.log('Original data');
console.log(myArray);// Output: ['a', 'c']
console.log('Pulled data'); 
console.log(pulled);// Output: ['b', 'd']