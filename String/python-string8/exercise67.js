/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

// my solution
function remove_all_consecutives(str) {
    let result = "";
    for(let i=0;i<str.length;i++) {
        if(!result.includes(str[i]) || str[i]!=str[i-1]) {
            result+=str[i]
        }
    }
    return result;
}
console.log(remove_all_consecutives("xxxxxyyyyyabcab"))

// or


// my sol
function remove_all_consecutives2(str) {

 
}

console.log(remove_all_consecutives2("xxxxxyyyyyabca")); // xyabca