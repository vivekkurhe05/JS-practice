/**
 * Write a Python program to match if two words from a list of words starting with letter 'P'.
 */

// my solution
function match_words(arr) {
    const re = /\bP\w*/g

    return arr.some(word => {
        let matches = word.match(re)
        return matches && matches.length >=2
    })
}

let words = ["Python PHP", "Java JavaScript", "C C++", "Python Java"];
console.log(match_words(words));