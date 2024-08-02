/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

// do this
function remove_all_consecutives(str){
    let newStr = ""
    for(let i=0;i<str.length;i++){
        if(!newStr.includes(str[i]) || str[i] !== str[i-1]) newStr+=str[i]
    }

    return newStr
}

console.log(remove_all_consecutives("xxxxxyyyyyx")) // xyx