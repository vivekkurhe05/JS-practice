/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

// my solution
function swap_case(str) {

    let arr = str.trim().split("")
    return arr.map(el => {
        if(el === el.toUpperCase()) return el.toLowerCase()
        else return el.toUpperCase()
    }).join("")
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))