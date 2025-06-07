/**
 * Write a JavaScript program to dcapitalize the first letter of a string.
 */

// my sol
function decapitalize(str, flag) {
    let result = "";
    if(flag) {
        result = str[0].toLowerCase() + str.slice(1).toUpperCase();
    }else{
        result = str[0].toLowerCase() + str.slice(1);
    }
    return result;
}

console.log(decapitalize('W3resource'));  
console.log(decapitalize('Red', true));