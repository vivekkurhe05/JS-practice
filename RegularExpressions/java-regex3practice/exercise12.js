/**
 * Write a Java program to replace Python with Java and code with coding in a given string.
 */

// my solution
function validate(str) {
  const re = /(Python|code)/g
  return str.replace(re, function(word){
    const obj = {
      "Python": "Java",
      "code": "coding"
    }
    return obj[word] || word
  })
}

var text =
  "Python is an interpreted high-level general-purpose programming language. " +
  "Its design philosophy emphasizes code readability with its use of significant indentation. " +
  "Its language constructs as well as its object-oriented approach aim to help programmers write" +
  "clear, logical code for small and large-scale projects.";

console.log(validate(text));