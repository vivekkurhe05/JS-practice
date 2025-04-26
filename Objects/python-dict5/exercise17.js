/**
 * Write a Python program to remove duplicates from the dictionary.
 */

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

let uniqueStudents = {};
let uniqueValuesSet = new Set();

for(let id in student_data) {
    let student = student_data[id];
    let studentString = JSON.stringify(student);

    if(!uniqueValuesSet.has(studentString)) {
        uniqueValuesSet.add(studentString);
        uniqueStudents[id] = student;
    }
}

console.log(uniqueStudents);