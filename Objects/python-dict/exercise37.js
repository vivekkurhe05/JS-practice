/**
 * Write a Python program to replace dictionary values with their sums.
 */

// my solution
// work on this
let student_details= [
    {'id' : 1, 'subject' : 'math', 'V' : 70, 'VI' : 82},
    {'id' : 2, 'subject' : 'math', 'V' : 73, 'VI' : 74},
    {'id' : 3, 'subject' : 'math', 'V' : 75, 'VI' : 86}
  ]

  student_details = student_details.map(obj => {
        let val1=obj['V']
        let val2=obj['VI']
        let avg = (val1+val2)/2
        delete obj['V']
        delete obj['VI']
        obj['V+VI'] = avg
        return obj
  })

console.log(student_details)