/**
 * Write a Python program to replace dictionary values with their sums.
 */

let student_details= [
    {'id' : 1, 'subject' : 'math', 'V' : 70, 'VI' : 82},
    {'id' : 2, 'subject' : 'math', 'V' : 73, 'VI' : 74},
    {'id' : 3, 'subject' : 'math', 'V' : 75, 'VI' : 86}
  ]
  const new_students = student_details.map((obj) => {
    let sum = 0;
    let V = obj['V'];
    let VI = obj['VI']; 
    sum = V+VI;
    delete obj['V'];
    delete obj['VI'];
    obj['V+VI'] = sum;
    return obj
  })

  console.log(new_students);
