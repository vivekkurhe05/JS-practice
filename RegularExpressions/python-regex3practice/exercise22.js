/**
 * Write a Python program to find the occurrence and position of the substrings within a string
 * Found "exercises" at 7:16                                                                                  
Found "exercises" at 22:31                                                                                    
Found "exercises" at 36:45
 */

// my solution
let text = "Python exercises, PHP exercises, C# exercises";
const re = /exercises/g
let matches = []
let match

do{
    match = re.exec(text)
    if(match){
        matches.push(match)
    }
}while(match!=null)

matches.forEach(el => console.log(`${el.index}:${el.index+re.source.length}`))