/**
 * 
Write a Python program to find the smallest and largest words in a given string.

 */

function find_smallest_largest(str) {
    let arr = str.split(' ');
    let words_leng = arr.sort((a,b) => a.length - b.length);
    return [words_leng[0], words_leng[words_leng.length-1]];
}

console.log(find_smallest_largest("Write a Java program to sort an array of given integers using Quick sort Algorithm."))