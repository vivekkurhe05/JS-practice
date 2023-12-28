/**
 * 
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over  lazy dog"
 */

// my solution
function remove_first_occurrence(str, given_str) {
    return str.substring(0, str.indexOf(given_str))+ str.substring(str.indexOf(given_str)+given_str.length+1)
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));