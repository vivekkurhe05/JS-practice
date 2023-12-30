/**
 * How to find the longest word within the string in JavaScript ?
 */

function find_longest(str) {
    let arr = str.trim().split(" ")
    return arr.sort((a,b) => a.length - b.length)[arr.length-1]
}


console.log(
    find_longest("This is a demo String find the largest word from it")
  );
  
  console.log(
    find_longest(
      "Hello guys this is geeksforgeeks where students learn programming"
    )
  );