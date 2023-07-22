/**
 * Write a Python program to remove duplicates from the dictionary.
 */

// work on this
// geekforgeeks solution
let student_data = {
    'id1': 
   {'name': ['Sara'], 
    'class': ['V'], 
    'subject_integration': ['english, math, science']
   },
 'id2': 
  {'name': ['David'], 
    'class': ['V'], 
    'subject_integration': ['english, math, science']
   },
 'id3': 
    {'name': ['Sara'], 
    'class': ['V'], 
    'subject_integration': ['english, math, science']
   },
 'id4': 
   {'name': ['Surya'], 
    'class': ['V'], 
    'subject_integration': ['english, math, science']
   },
}

let arr = []

for (let key in student_data) {
  arr.push(student_data[key])
}

let newArray = []

let obj = {}
console.log(arr)
for (let i in arr) {
  let objTitle = arr[i]['name']
  obj[objTitle] = arr[i]
}

for (let i in obj) {
  newArray.push(obj[i])
}

console.log(obj)