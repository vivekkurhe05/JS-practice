/**
 * Write a Python script to concatenate the following dictionaries to create a new one.
Sample Dictionary :
dic1={1:10, 2:20}
dic2={3:30, 4:40}
dic3={5:50,6:60}
Expected Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
 */

// my solution
const dic1={1:10, 2:20}
const dic2={3:30, 4:40}
const dic3={5:50,6:60}
let dict4 = {}
dict4 = Object.assign(dict4, dic1, dic2, dic3)
console.log(dict4)