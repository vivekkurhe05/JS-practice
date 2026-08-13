/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

function swap_case(str) {
    return str.split("").map(chr => chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()).join("");
    
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))