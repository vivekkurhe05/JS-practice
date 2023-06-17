/**
 * Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

// my solution
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

let size = 0;
for(let prop in student) {
    if(student.hasOwnProperty(prop)) {
        size++;
    }
}

console.log(size)