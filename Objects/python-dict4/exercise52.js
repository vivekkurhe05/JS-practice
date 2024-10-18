/**
 * Write a Python program to extract a list of values from a given list of dictionaries.
Original Dictionary:
[{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}]
Extract a list of values from said list of dictionaries where subject = Science
[92, 94, 88]
Original Dictionary:
[{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}]
Extract a list of values from said list of dictionaries where subject = Math
[90, 89, 92]
 */

// my solution
let arr = [{'Math': 90, 'Science': 92}, {'Math': 89, 'Science': 94}, {'Math': 92, 'Science': 88}]
let sci=[], math=[]
arr.map(obj=>{
    
    for(let key in obj){
        if(key==='Science'){
            sci.push(obj[key])
        }else if(key==='Math'){
            math.push(obj[key])
        }
    }
})
console.log(sci)
console.log(math)