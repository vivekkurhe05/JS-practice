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

let arr1 = [
    {'Math': 90, 'Science': 92}, 
    {'Math': 89, 'Science': 94}, 
    {'Math': 92, 'Science': 88}
]

let arr2 = [
    {'Math': 90, 'Science': 92}, 
    {'Math': 89, 'Science': 94}, 
    {'Math': 92, 'Science': 88}
]

arr1=arr1.map(obj=>obj.Science)
console.log(arr1)

arr2=arr2.map(obj=>obj.Math)
console.log(arr2)