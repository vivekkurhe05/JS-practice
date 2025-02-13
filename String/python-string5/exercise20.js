/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

// my solution
function reverse_string(str) {
    let rev=""
    let reverse = function(str) {
        for(let i=str.length-1; i>=0;i--){
            rev+=str[i]
        }
        return rev
    }

  if(str.length%4===0) {
    return reverse(str)
  }else{
    return "Not a multiple of 4"
  }
}

console.log(reverse_string('abcd'))
console.log(reverse_string('python'))