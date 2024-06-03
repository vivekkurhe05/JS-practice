/**
 * Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
 */


function escape_html(str){
    let arr = str.trim().split("")
    return arr.map(chr=> {
        let obj = {
            '&':"&amp;",
            '>':"&gt;"
        }

        return obj[chr] || chr
    }).join("")
}

console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));