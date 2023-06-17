// my solution

function reverse_alphabets(str) {
    const re = /[a-z]+/gi;
    return str.replace(re, function(word) {
        return word.split("").reverse().join("")
    })
}

console.log(reverse_alphabets('test12pop90java989pyt'))