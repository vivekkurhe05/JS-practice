/**
 * Write a Python program to count repeated characters in a string.
Sample string: 'thequickbrownfoxjumpsoverthelazydog'
Expected output :
o 4
e 3
u 2
h 2
r 2
t 2
 */

// my solution
function count_repeated_chars(str) {
    let obj = {}
    for(let i=0;i<str.length;i++){
        let count=0
        let index = str.indexOf(str[i])
        while(index!=-1){
            count++
            index = str.indexOf(str[i], index+1)

            if(count>1) obj[str[i]] = count
        }
    }
    
    return obj
}

console.log(count_repeated_chars('thequickbrownfoxjumpsoverthelazydog'))