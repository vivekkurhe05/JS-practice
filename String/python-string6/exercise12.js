/**
 * Write a Python program to count the occurrences of each word in a given sentence.
Sample String : "the quick brown fox jumps over the lazy dog"
 */

function word_count(str) {
    let arr = str.split(" ");

    let obj = {}
    for(let word of arr) {

        let index = arr.indexOf(word);
        let count = 0;
    
        while(index != -1) {
            count++;
            index = arr.indexOf(word, index+1);
            obj[word]= count
        }
    }

    return obj;
}

console.log(word_count("the quick brown fox jumps over the lazy dog"))