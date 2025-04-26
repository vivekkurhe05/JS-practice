/**
 * Write a Python program to multiply all the items in a dictionary.
 */

my_dict = {'data1':100,'data2':-54,'data3':247}
let val = Object.values(my_dict);
let mul = val.reduce((acc, el) => {
    acc*=el
    return acc;
}, 1)

console.log(mul);