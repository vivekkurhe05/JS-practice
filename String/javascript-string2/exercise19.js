/**
 * Write a JavaScript function to escape a HTML string.
 * Test Data :
 * console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
 * Output :
 * "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

function escape_HTML(str){
    let arr = str.trim().split("")
    return arr.map((el)=>{
        let obj = {
            "<":"&lt;",
            '"':"&quot;",
            ">":"gt;"
        }
        return obj[el] || el
    }).join("")
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));