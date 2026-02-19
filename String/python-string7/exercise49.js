/**
 * Write a Python program to count and display vowels in text.
 * {e:4,o:4,u:1}
 */

function count_and_display_vowels(str) {
    const re = /[^aeiou]/gi;
    str = str.replace(re, "");
    let obj = [];
    for(let i=0; i<str.length; i++) {
        let index = str.indexOf(str[i]);
        let count = 0;
        while(index!=-1) {
            count++;
            index = str.indexOf(str[i], index+1);
            obj[str[i]] = count;
        }
    }
    return obj;
}

console.log(count_and_display_vowels("welcome to w3resource.com"))