/**
 * Write a Python program to create a 3X3 grid with numbers.
3X3 grid with numbers:
[[1, 2, 3], [1, 2, 3], [1, 2, 3]]
 */

// my solution
let result = []

for(let i=0;i<3;i++) {
    let sublist = []
    for(let j=1;j<=3;j++) {
        sublist.push(j)
    }
    result.push(sublist)
}
console.log(result)