/**
 * Write a JavaScript program to count number of words in string. Go to the editor
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.
 */

// my solution
function count_words(str){
    return str.replace(/^\s+|\s+$/g, "").replace(/\s+/g," ").split(" ").length
}

console.log(count_words(" The quick brown  fox jumps over  the lazy dog "));