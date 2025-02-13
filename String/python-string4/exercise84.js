/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

// my sol
function swap_case(str) {
    const re = /\w/g
    return str.replace(re, function(chr) {
        return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()
    })
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))