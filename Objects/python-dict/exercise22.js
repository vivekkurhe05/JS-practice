/**
 * Write a Python program to find the highest 3 values of corresponding keys in a dictionary.
 */

// my solution
my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}  

let arr=Object.values(my_dict)
arr=arr.sort((a,b)=> b-a)
let keys=[]
for(let i=0;i<arr.length;i++) {
    for(let key in my_dict) {
        if(!keys.includes(key)) {
            if (arr[i] === my_dict[key]) keys.push(key)
        }
        
    }
}

console.log(keys.slice(0,3))