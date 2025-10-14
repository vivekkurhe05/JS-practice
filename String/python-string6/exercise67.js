/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

function remove_all_consecutives(str) {
    let resulting_string="";
    for(let i=0;i<str.length;i++) {
        if((str[i] === str[i+1] || str[i] != str[i+1]) && (resulting_string.includes(str[i]) || str[i] !==str[i+1])) {
            resulting_string+=str[i];
        }
    }

    return resulting_string;
}

console.log(remove_all_consecutives("xxxxxyyyyyabca")); // xyabca