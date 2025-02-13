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

// my sol
function count_repeated_chars(str) {
    let obj={}
    for(let i=0;i<str.length;i++) {
        let index=str.indexOf(str[i])
        let count=0
        while(index!=-1){
            count++
            index=str.indexOf(str[i],index+1)
            if(count>=2){
                obj[str[i]]=count
            }
        }
    }
    return obj
}

console.log(count_repeated_chars('thequickbrownfoxjumpsoverthelazydog'))