/**
 * Write a Python program to replace dictionary values with their sums.
 */

//chatgpt sol
let student_details= [
    {'id' : 1, 'subject' : 'math', 'V' : 70, 'VI' : 82},
    {'id' : 2, 'subject' : 'math', 'V' : 73, 'VI' : 74},
    {'id' : 3, 'subject' : 'math', 'V' : 75, 'VI' : 86}
  ]
student_details.forEach(student => {
  // Initialize a sum variable
  let sum = 0;

  // Iterate through each key in the student object
  for (let key in student) {
    // Add the numeric values (skip non-numeric ones like 'id' and 'subject')
    if (typeof student[key] === 'number' && key != 'id') {
      sum += student[key];
    }
  }

  // Replace the object values with the calculated sum
  student['sum'] = sum;
});

// Output the modified array
console.log(student_details);