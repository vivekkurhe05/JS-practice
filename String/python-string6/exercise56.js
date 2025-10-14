/**
 * Write a Python program to find the second most repeated word in a given string.
 */

function word_count(str) {
    let arr = str.split(" ");
    let obj = {};
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] + 1;
        }else{
            obj[arr[i]] = 1;
        }
    }

    return Object.entries(obj)[1];
}

console.log(word_count("Both of these issues are fixed by postponing the evaluation of annotations. Instead of compiling code which executes expressions in annotations at their definition time, the compiler stores the annotation in a string form equivalent to the AST of the expression in question. If needed, annotations can be resolved at runtime using typing.get_type_hints(). In the common case where this is not required, the annotations are cheaper to store (since short strings are interned by the interpreter) and make startup time faster.")) // of
console.log(word_count("ab ca bc ab ca")) // ca
console.log(word_count("ab ca bc ab ca ab bc")) // ca
console.log(word_count("ab ca bc ca ab bc")) // ca
console.log(word_count("ab ab ab sa ca sa bc")) // sa