/**
 * Write a Python program to find the occurrence and position of the substrings within a string
 * Found "exercises" at 7:16                                                                                  
Found "exercises" at 22:31                                                                                    
Found "exercises" at 36:45
 */

// my solution
let text = "Python exercises, PHP exercises, C# exercises";
const re = /exercises/g
while(re.test(text)){
    console.log((re.lastIndex) - (re.source.length)+" : "+re.lastIndex)
}
