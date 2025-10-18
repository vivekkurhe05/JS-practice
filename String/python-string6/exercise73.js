/**
 * Write a Python program to count Uppercase, Lowercase, special characters and
numeric values in a given string.
 */

function count(str) {
    let U_count=0, L_count=0, S_count=0, N_count=0;

    for(let chr of str) {
        if(chr>='A' && chr <='Z') U_count++;
        else if(chr>='a' && chr <= 'z') L_count++;
        else if(chr>='0' && chr<='9') N_count++;
        else S_count++;
    }

    return {
        "upperCase": U_count,
        "lowerCase": L_count,
        "specialChars": S_count,
        "numeric": N_count
    };
}

console.log(count("@W3Resource.Com"))