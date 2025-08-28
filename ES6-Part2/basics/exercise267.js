/**
 * Write a JavaScript program to calculate the midpoint between two pairs of points.

Destructure the array to get x1, y1, x2 and y2.
Calculate the midpoint for each dimension by dividing the sum of the two endpoints by 2
 */

// w3resource sol
function mid_point([x1, y1], [x2, y2]) {
    return [(x1+x2)/2, (y1+y2)/2];
}

console.log(mid_point([6, 6], [4, 4]));    // Output: [5, 5]
console.log(mid_point([2, -2], [4, 4]));   // Output: [3, 1]
console.log(mid_point([2, 2], [-4, -1]));  // Output: [-1, 0.5]
console.log(mid_point([1, 3], [2, 5]));    // Output: [1.5, 4]