/**
 * Write a Python program to count and display vowels in text.
 * {e:4,o:4,u:1}
 */

function count_and_display_vowels(str) {
    let obj = {};
    let vowels = "aeiou";
    for(let chr of str) {

        let count = 0;
        let index = str.indexOf(chr);
    
        while(index != -1) {
            count++;
            index = str.indexOf(chr, index+1)
            if(vowels.includes(chr))
                obj[chr] = count;
        }
    }

    return obj;

}

console.log(count_and_display_vowels("welcome to w3resource.com"))