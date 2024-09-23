/**
 * Write a Python script to concatenate the following dictionaries to create a new one.
Sample Dictionary :
dic1={1:10, 2:20}
dic2={3:30, 4:40}
dic3={5:50,6:60}
Expected Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
 */

// my solution
let dic1={1:10, 2:20}
let dic2={3:30, 4:40}
let dic3={5:50,6:60}
let dic4 = Object.assign({},dic1,dic2, dic3)
console.log(dic4)