/**
 * Write a JavaScript program to create an array of elements, 
 * grouped based on the position in the original array.
 * 
 * output:
 * [["a",1,true],["b",2,false]]
 * [["a",1,true],[null,2,false]]
 */

// my sol
function zip(arrofStr, arrOfNum, arrOfBool) {
    while(arrofStr.length < arrOfNum.length) arrofStr.push(null);
    return arrofStr.reduce((acc, cur, i) => {
        acc[i].push(arrofStr[i], arrOfNum[i], arrOfBool[i]);
        let subarr1 = new Set(acc[i]);
        acc[i] = Array.from(subarr1)
        return acc;
    }, [[],[]]);
}

console.log(zip(['a', 'b'], [1, 2], [true, false]));  
console.log(zip(['a'], [1, 2], [true, false]));