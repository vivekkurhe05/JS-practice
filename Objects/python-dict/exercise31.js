/**
 * Write a Python program to get the key, value and item in a dictionary.
 */

// my solution
let dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}

let count=0
console.log(`Key Value Count`)
for (let key in dict_num) {
    count++
    console.log(`${key}\t${dict_num[key]}\t${count}`)   
}