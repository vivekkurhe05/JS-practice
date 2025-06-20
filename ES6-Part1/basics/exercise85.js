/**
 * Write a JavaScript program to replace all but the last number of characters 
 * with the specified mask character.
 * 
output
******7890
*******890
$$$$567890
 */

// my sol
function mask(num, lastchars=4, spec="*") {
    num = num.toString();
    let masking = num.slice(lastchars).split("").map(el=>spec).join("");
    return masking + num.substring(masking.length);
}

console.log(mask(1234567890));  
console.log(mask(1234567890, 3));  
console.log(mask(1234567890, -4, '$')); 