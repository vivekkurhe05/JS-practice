/**
 * Write a JavaScript function to check whether a given value represents a domain or not.
 */

// my solution
function is_domain(str){
    const re = /^www\.([a-z]+\.){1,2}(com|uk)$/g
    return re.test(str)
}

console.log(is_domain("www.example.com")); // true

console.log(is_domain("www.npm.co.uk")); // true

console.log(is_domain("http://www.example.com")); // false

console.log(is_domain("https://www.example.com")); // false

console.log(is_domain("www.example.com")); // true