/**
 * How to remove a character from string in JavaScript ?
 */

// my solution
function remove_char(str, index) {
    let arr = str.trim().split("")
    arr.splice(index,1).join("")
    return arr.join("")
}

console.log(remove_char('GeeksForGeeks', 0));
