/**
 * Write a Python program to multiply all the items in a dictionary.
 */

// my solution
my_dict = {'data1':100,'data2':-54,'data3':247}
mul=1
for(let key in my_dict){
    mul*=my_dict[key]
}
console.log(mul)