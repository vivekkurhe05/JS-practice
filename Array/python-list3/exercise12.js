/**
 * Write a Python program to print a specified list after removing the 0th, 4th and 5th elements.
Sample List : ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
Expected Output : ['Green', 'White', 'Black']
 */

// my sol
let color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
let newColors=[]
for(let i=0;i<color.length;i++) {
    if(i===0||i===4||i===5) {
        continue
    }else{
        newColors.push(color[i])
    }
}

console.log(newColors)