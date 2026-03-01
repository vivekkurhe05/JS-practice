/**
 * 
Write a Python program to find the smallest and largest words in a given string.

 */

function find_smallest_largest(str) {
    const arr = str.split(" ");
    let sorted = arr.sort((a,b) => a.length - b.length)
    return [sorted[0], sorted[sorted.length-1]];
}

console.log(find_smallest_largest("Write a Java program to sort an array of given integers using Quick sort Algorithm."))