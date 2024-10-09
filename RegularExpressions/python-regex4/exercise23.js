/**
 * Write a Python program to replace whitespaces with an underscore and vice versa.
 * 
 * Python_Exercises                                                                                              
Python Exercises
 */

// my solution
function text_transform(str){
    const re = /[\s_]/g
    return str.replace(re, (chr) => {
        let obj = {
            " ": "_",
            "_": " "
        }
        return obj[chr] || chr
    })
}

console.log(text_transform("Python_Exercises"));
console.log(text_transform("Python Exercises"));