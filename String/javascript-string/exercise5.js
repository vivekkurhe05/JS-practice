/**
 * 
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

// my solution
function abbrev_name(str) {
    let arr = str.trim().split(" ")
    if(arr.length > 1)
        return arr[0]+" "+arr[1][0]+"."
    else return arr[0]
}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Robin"));