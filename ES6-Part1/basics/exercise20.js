/**
 * Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
 */

// my sol
function extend_Hex(str) {
    if(!str.startsWith("#")) {
        str = "#"+str;
    }
    let arr = str.split("");
    const re = /[0-9a-f]/gi;
    return arr.map((el) => el.match(re) ? el+el : el).join("");
}

console.log(extend_Hex('#03f')); // #0033ff
console.log(extend_Hex('05a')); // #0055aa