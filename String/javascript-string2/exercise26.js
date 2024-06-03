/**
 * 
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over  lazy dog"
 */

function remove_first_occurrence(str, substr){
    let part1 = str.substring(0, str.indexOf(substr))
    let part2 = str.substring(str.indexOf(substr)+substr.length)
    return part1+part2
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));