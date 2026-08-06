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

function count_repeated_chars(str) {
    let obj = {};
    for(let chr of str) {
        let index = str.indexOf(chr);
        let count = 0;
        while(index != -1) {
            count++;
            index = str.indexOf(chr, index+1);
            if(count > 1) obj[chr] = count;
        }
    }

    return obj;
}

console.log(count_repeated_chars("thequickbrownfoxjumpsoverthelazydog"))