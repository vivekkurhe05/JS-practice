/**
 * Write a JavaScript program to get the highest index at which value should be 
 * inserted into an array in order to maintain its sort order.
 * This is based on a provided iterator function
 */

// chatgpt sol
function sortedLastIndex(array, value) {
    let low = 0;
    let high = array.length;
    const val = value;

    while(low < high) {
        const mid = Math.floor((low+high)/2);
        if(array[mid] <= val) {
            low = mid + 1;
        }else {
            high = mid;
        }
    }

    return low;
}

console.log(sortedLastIndex([10, 20, 30, 30, 40], 30)); // Output: 4

