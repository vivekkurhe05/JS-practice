/**
 * Write a Python program to sum all the items in a dictionary.
 */

// my solution
my_dict = {'data1':100,'data2':-54,'data3':247}
let sum=0
for (let key in my_dict) {
    sum+=my_dict[key]
}
console.log(sum)