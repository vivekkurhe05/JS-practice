/**
 * 
 * Write a JavaScript function to alphabetize a given string.
 * Alphabetize string : An individual string can be alphabetized. This rearranges the letters so 
 * they are sorted A to Z.
 * Test Data :
 * console.log(alphabetize_string('United States'));
 * Output :
 * "SUadeeinsttt"
 */

// my solution
function alphabetize_string(str){
    return Array.from(str).sort().join("").trimStart()
}

console.log(alphabetize_string('United States'));