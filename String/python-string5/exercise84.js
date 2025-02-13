/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

// my solution
function swap_case(str) {
    let arr = Array.prototype.slice.call(str)
    return arr.map((chr) => {
        if(chr === chr.toLowerCase()) chr = chr.toUpperCase()
        else chr = chr.toLowerCase()
        return chr
    }).join('')
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))