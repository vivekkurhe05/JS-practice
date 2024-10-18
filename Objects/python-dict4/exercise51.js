/**
 * A Python Dictionary contains List as a value. Write a Python program to update the list values in the said dictionary.
Original Dictionary:
{'Math': [88, 89, 90], 'Physics': [92, 94, 89], 'Chemistry': [90, 87, 93]}
Update the list values of the said dictionary:
{'Math': [89, 90, 91], 'Physics': [90, 92, 87], 'Chemistry': [90, 87, 93]}
 */

// my solution
let obj = {'Math': [88, 89, 90], 'Physics': [92, 94, 89], 'Chemistry': [90, 87, 93]}

obj['Math']=obj['Math'].map(el=>el+1)
obj['Physics']=obj['Physics'].map(el=>el-2)
obj['Chemistry']=obj['Chemistry'].map(el=>el)

for(let key in obj){
    key = obj[key]
}
console.log(obj)