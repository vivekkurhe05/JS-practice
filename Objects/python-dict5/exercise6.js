/**
 * Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
Sample Dictionary ( n = 5) :
Expected Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
 */

let n = 5
let obj = {}

for(let i=1;i<=n;i++) {
    obj[i] = i*i
}
console.log(obj)
