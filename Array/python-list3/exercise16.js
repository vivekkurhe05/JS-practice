/**
 * Write a Python program to generate and print a list of the first 
 * and last 5 elements where the values are square numbers between 1 and 30 (both included).
 */

// my sol
let list=[]
for(let i=1;i<=30;i++) {
    let num = Math.pow(i,2)  
    list.push(num)
}

console.log(list)