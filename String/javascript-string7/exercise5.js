/**
 * 
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function abbrev_name(input) {
    const arr = input.split(" ");
    if(arr.length > 1) {

        return `${arr[0]} ${arr[1][0]}.`;
    }

    return arr[0];

}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Robin"))