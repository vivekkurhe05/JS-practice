/**
 * 
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function abbrev_name(str){
    let arr = str.trim().split(" ")
    return `${arr[0]} ${arr[1][0]}.`
}

console.log(abbrev_name("Robin Singh"));