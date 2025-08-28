/**
 * Write a JavaScript program to check if two given numbers are approximately equal to each other.
 */

function approximatelyEqual(v1, v2) {
    return Math.abs(v1-v2) < 0.001;
}

console.log(approximatelyEqual(Math.PI / 2.0, 1.5708));