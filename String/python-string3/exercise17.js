/**
 * Write a Python function to get a string made of 4 copies of the last two characters
of a specified string (length must be at least 2).
Sample function and result :
insert_end('Python') -> onononon
insert_end('Exercises') -> eseseses
 */

// my solution
function insert_end(str){
    let last_two=str.slice(-2)
    return last_two.repeat(4)
}

console.log(insert_end("Python"))
console.log(insert_end("Exercises"))


// or my solution
function insert_end(str){
    let last_two=str.slice(-2)
    return new Array(5).join(last_two)
}

console.log(insert_end("Python"))
console.log(insert_end("Exercises"))