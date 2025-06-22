/**
 * Write a JavaScript program to convert a given string into an array of words.
 */

// my sol
function words(str) {
    const re = /[!,]/g;
    str = str.replace(re,"");
    return str.trim().split(" ")
}

console.log(words('I love javaScript!!')); // Output: ['I', 'love', 'javaScript']
console.log(words('python, java, php')); // Output: ['python', 'java', 'php']