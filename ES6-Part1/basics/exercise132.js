/**
 * Write a JavaScript program to get the symmetric difference between two given arrays, 
 * using a provided function as a comparator.
 */

// chatgpt sol
function symmetricDifferenceWith(arr1, arr2) {
    let safeArr1 = arr1.map(el => Math.round(el));
    let safeArr2 = arr2.map(el => Math.round(el));

    let filArr1 = arr1.filter(el => {
        return !safeArr2.includes(Math.round(el));
    });

    let filArr2 = arr2.filter(el => {
        return !safeArr1.includes(Math.round(el));
    });

    return [...filArr1, ...filArr2];
}

console.log(symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9]
)); 