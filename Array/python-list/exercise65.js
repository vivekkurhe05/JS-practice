/**
 * Write a Python program to move all zero digits to the end of a given list of numbers.
Expected output:
Original list:
[3, 4, 0, 0, 0, 6, 2, 0, 6, 7, 6, 0, 0, 0, 9, 10, 7, 4, 4, 5, 3, 0, 0, 2, 9, 7, 1]
Move all zero digits to end of the said list of numbers:
[3, 4, 6, 2, 6, 7, 6, 9, 10, 7, 4, 4, 5, 3, 2, 9, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */

// my solution
let num = [3, 4, 0, 0, 0, 6, 2, 0, 6, 7, 6, 0, 0, 0, 9, 10, 7, 4, 4, 5, 3, 0, 0, 2, 9, 7, 1]
for(let i=0; i<num.length; i++) {
    if(num[i] === 0) {
        num.splice(i,1)
        num.push(0)
    }
}

for(let i=0; i<num.length; i++) {
    if(num[i] === 0) {
        num.splice(i,1)
        num.push(0)
    }
}

console.log(num)