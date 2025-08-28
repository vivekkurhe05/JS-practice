/**
 * Write a JavaScript program to get an array of lines from the specified file.
 */

const fs = require("fs");

function readFileLines(filename) {
    return fs.readFileSync(filename).toString('utf-8').split('\r\n').map(el => el.trim());
}

let arr = readFileLines('test.txt');
console.log(arr);