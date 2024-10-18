/**
 * Write a Python program to check if multiple keys exist in a dictionary.
 */

// my solution
function isMultipleKeys(obj, arr) {
  return arr.every(key => {
    return key in obj
  })
}

student = {
    'name': 'Alex',
    'class': 'V',
    'roll_id': '2'
  }

  console.log(isMultipleKeys(student, ["name", "class"]))
  console.log(isMultipleKeys(student, ["name", "Alex"]))
  console.log(isMultipleKeys(student, ["roll_id", "name"]))