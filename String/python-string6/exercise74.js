/**
 * Write a Python program to find the minimum window in a given string that will contain
all the characters of another given string.
Example 1
Input : str1 = " PRWSOERIUSFK "
str2 = " OSU "
Output: Minimum window is "OERIUS
 */

// do this
function minimum_window(str1, str2) {
    
    let arr = str2.trim().split("")
    arr = arr.map(el => str1.lastIndexOf(el))
    let first_char = arr[0]
    arr = arr.sort((a,b)=>{
        if(a>b)return 1
        else if(b>a) return -1
        else 0
    })
    return str1.slice(first_char, arr[arr.length-1]+1)
}

console.log(minimum_window("PRWSOERIUSFK","OSU"))