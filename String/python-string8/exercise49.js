/**
 * Write a Python program to count and display vowels in text.
 * {e:4,o:4,u:1}
 */

function count_and_display_vowels(str) {
    let obj = {};
    let count=0;
    for(let chr of str) {
        if(/[aeiou]/gi.test(chr)) {
            if(!(chr in obj)) {
                obj[chr] = count+1;
            }else{
                obj[chr] = obj[chr] + 1;
            }
        }
    }

    return obj;
}

console.log(count_and_display_vowels("welcome to w3resource.com"))