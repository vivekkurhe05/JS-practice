/**
 * Write a Python program to count Uppercase, Lowercase, special characters and
numeric values in a given string.
 */

function count (str) {
    let uppercasecount=0
    let lowercasecount=0
    let numericcount=0
    let specialcount=0

    for(let i=0; i<str.length; i++) {
        if(str[i] >='A' && str[i]<= 'Z') uppercasecount++
        else if(str[i] >= 'a' && str[i] <= 'z') lowercasecount++
        else if(str[i] >= '0' && str[i] <= '9') numericcount++
        else specialcount++
    }

    return {
        "Uppercase": uppercasecount,
        "Lowercase": lowercasecount,
        "Special": specialcount,
        "Numeric": numericcount
    }
}

console.log(count("@W3Resource.Com"))