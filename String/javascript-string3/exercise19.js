/**
 * Write a JavaScript function to escape a HTML string.
 * Test Data :
 * console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
 * Output :
 * "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

// my solution
function escape_HTML(str){
    let re = /[<">]/g
    return str.replace(re, function(chr) {
        let obj = {
            '<': "&lt;",
            '"': "&quot;",
            '>': "&gt;"
        }
        return obj[chr] || chr
    })
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));