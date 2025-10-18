/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

function swap_case(str) {
    let resulting_string="";
    for(let chr of str) {
        if(chr === chr.toUpperCase()) resulting_string += chr.toLowerCase();
        else if (chr === chr.toLowerCase())resulting_string += chr.toUpperCase();
    }
    return resulting_string;
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))