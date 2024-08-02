/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

// my solution
function odd_values_string(str) {
    let newstr=""
    for(let i=0; i<str.length; i++){
        if(i%2!==0){
            continue
        }else{
            newstr+=str[i]
        }
    }
    return newstr
}

console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))


// or my solution
function odd_values_string2(str) {
    return Array.from(str).filter((el,i) => i%2===0).join("")
}

console.log(odd_values_string2("abcdef"))
console.log(odd_values_string2("python"))