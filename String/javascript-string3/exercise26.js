/**
 * 
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over  lazy dog"
 */

// my solution
function remove_first_occurrence(str, substr) {
    let index = str.indexOf(substr)
    return str.substring(0, index) + str.substring(index+substr.length)
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));