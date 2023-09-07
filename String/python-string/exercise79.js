/**
 * 
Write a Python program to find the smallest and largest words in a given string.

 */

// my solution
function find_smallest_largest(str) {
    let arr = str.split(" ")
    arr = arr.sort((a,b) => a.length-b.length)
    return [arr[0], arr[arr.length-1]]
}

console.log(find_smallest_largest("Write a Java program to sort an array of given integers using Quick sort Algorithm."))