/**
 * Write a Java program to count number of vowels in a given string using regular expression.
 */

function validate(str) {
    const re = /[aeiou]/gi;
    let count = 0;
    for(let chr of str) {
        if(re.test(chr)){ 
            console.log(chr);
            count++

        };
    }

    return count;
}

console.log(validate("Hello there!! Count total number of vowels in a string"));
