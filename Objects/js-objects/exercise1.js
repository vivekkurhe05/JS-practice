/**
 * Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
 */

// my solution
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

for(let prop in student) {
    if(student.hasOwnProperty(prop)) {
        console.log(prop)
    }
}