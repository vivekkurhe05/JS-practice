/**
 * Write a Python program to separate and print the numbers and their position of a given string.
 */

// my solution
let text =
  "The following example creates an ArrayList with a capacity of 50 elements. Four elements are then added to the ArrayList and the ArrayList is 22 trimmed accordingly.";

const re = /\d+/g
let matches = []
let match

do{
    match = re.exec(text)
    if(match){
        matches.push(match)
    }
}while(match!=null)

matches.forEach(arr => console.log(arr[0]+":"+arr.index))