/**
 * Write a JavaScript program that returns 1 if the array is sorted in ascending order. 
 * It returns -1 if it is sorted in descending order or 0 if it is not sorted.
 */

//chatgpt sol
function isSorted(arr) {

    let isAscending = true;
    let isDescending = true;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            isAscending  =false;
        }

        if(arr[i] > arr[i-1]) {
            isDescending = false;
        }
    }

    if(isAscending) return 1;
    if(isDescending) return -1;
    return 0;
}

console.log(isSorted([0, 1, 2, 2])); // 1 (ascending order)
console.log(isSorted([4, 3, 2])); // -1 (descending order)
console.log(isSorted([4, 3, 5])); // 0 (not sorted)