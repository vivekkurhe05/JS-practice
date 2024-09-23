/**
 * Write a Java program that matches a string that has a 'p' followed by anything, ending in 'q'.
 */

// my solution
function validate(str){
    const re = /^p.+q$/g
    return re.test(str)
}

console.log(validate("phkuyrt")); // false
console.log(validate("pq")); // false
console.log(validate("pccddbbjjjq")); // true
console.log(validate("Jar")); // false
console.log(validate("pjhut")); // false