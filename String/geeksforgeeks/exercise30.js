/** Reverse a String in place */

// my solution
function reverse(str) {
    return str.trim().split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverse('This is GeeksForGeeks'));