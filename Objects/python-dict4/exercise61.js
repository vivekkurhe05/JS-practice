/**
 * Write a Python program to count the frequency of a dictionary.
Original Dictionary:
{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
Count the frequency of the said dictionary:
Counter({10: 2, 40: 2, 20: 2, 70: 1, 80: 1})
*/

// revise this again
let obj = {'XX':10,'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
let newObj = {}
for(let key in obj){
    if(obj[key] in newObj){
        newObj[obj[key]]++
    }else{
        newObj[obj[key]]=1
    }
}
console.log(newObj)