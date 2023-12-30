/**
 * How to insert a string at a specific index in JavaScript ?
 */

// my solution
function insert_str(str, substr) {
    return str.slice(0,5)+substr+str.slice(5)
}

console.log(insert_str("GeeksGeeks", "For"));