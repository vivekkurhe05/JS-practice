/**
 * Write a Python program to create a dictionary of keys x, y, and z where each key has as value a list 
 * from 11-20, 21-30, and 31-40 respectively. Access the fifth value of each key from the dictionary.
 */

// my solution
let val1 =[], val2 = [], val3 = []
for(let i=11;i<=20;i++){
    val1.push(i)
}

for(let i=21;i<=30;i++){
    val2.push(i)
}

for(let i=31;i<=40;i++){
    val3.push(i)
}

let obj = {}

obj['x'] = val1
obj['y'] = val2
obj['z'] = val3

console.log(obj)


for(let key in obj) {
    let count = 0    
    let val = obj[key].find(el => {
        count+=1
        if(count===5){
            return el
        }
    })
    console.log(val)
}