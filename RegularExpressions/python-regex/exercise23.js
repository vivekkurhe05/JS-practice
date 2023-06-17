/**
 * Write a Python program to replace whitespaces with an underscore and vice versa.
 * 
 * Python_Exercises                                                                                              
Python Exercises
 */

// my solution
function text_transform(str) {
    let text = "";
    if(str.indexOf("_") != -1) {
        text = str.replace("_", " ");
    }else {
        text = str.replace(" ", "_")
    }

    return text;
}

console.log(text_transform("Python_Exercises"));
console.log(text_transform("Python Exercises"));