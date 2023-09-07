/**
 * Write a Python program to swap cases in a given string.
Sample Output:
pYTHON eXERCISES
jAVA
nUMpY
 */

// my solution
function swap_case(str) {
    let length = 0
    let newstr=""
    while(str[length]!=undefined) {
        if(str[length] === str[length].toUpperCase()) newstr+=str[length].toLowerCase()
        else newstr+=str[length].toUpperCase()
        length++
    }
    return newstr
}

console.log(swap_case("pYTHON eXERCISES"))
console.log(swap_case("jAVA"))
console.log(swap_case("nUMpY"))