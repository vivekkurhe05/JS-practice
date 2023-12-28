/**
 * Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
 */

// my solution
function escape_html(str) {
    let re = /[&<>'"]/g
    return str.replace(re, (chr) => {
        let obj = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;"
        }

        return obj[chr] || chr
    })
}

console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));