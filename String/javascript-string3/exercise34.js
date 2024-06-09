/**
 * Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

// my solution
function sentenceCase(str){
    let arr = str.toLocaleLowerCase().trim().split(" ")
    return arr.map(words => {
        return words.charAt(0).toUpperCase() + words.substring(1)
    }).join(" ")

}

console.log(sentenceCase('PHP exercises. python exercises.'));