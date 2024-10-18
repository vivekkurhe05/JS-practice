/**
 * Write a Python program to get the key, value and item in a dictionary.
 */

// my solution
let dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
console.log(`Key\tValue\tCount`)
let count = 0
for(let key in dict_num){
    count+=1
    console.log(key+"\t"+dict_num[key]+"\t"+count)
}