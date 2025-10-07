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
        let count = 0;
        let index = str.indexOf(chr);

        while(index != -1) {
            count++;
            index = str.indexOf(chr, index+1);
            if(count > 1)
                obj[chr] = count;
        }
    }

    return Object.fromEntries(Object.entries(obj).sort((a,b) => b[1]-a[1]));
}

console.log(count_repeated_chars("thequickbrownfoxjumpsoverthelazydog"))