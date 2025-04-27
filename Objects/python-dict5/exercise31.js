/**
 * Write a Python program to get the key, value and item in a dictionary.
 */

const dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}

for (const key in dict_num) {
    console.log(key+" "+dict_num[key]);
}