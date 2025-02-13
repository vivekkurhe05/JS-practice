/**
 * Write a Python function to get a string made of 4 copies of the last two characters
of a specified string (length must be at least 2).
Sample function and result :
insert_end('Python') -> onononon
insert_end('Exercises') -> eseseses
 */

// my soluton
function insert_end(str) {
    if(str.length>=2) {
        return str.substring(str.length-2).repeat(4)
    }
}

console.log(insert_end("Python"))
console.log(insert_end("Exercises"))