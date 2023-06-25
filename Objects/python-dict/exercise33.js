/**
 * Write a Python program to check if multiple keys exist in a dictionary.
 */

// my solution
function isMultipleKeys(obj, arr) {
    let keys = Object.keys(obj)
    return arr.every(el => keys.includes(el))
}

student = {
    'name': 'Alex',
    'class': 'V',
    'roll_id': '2'
  }

  console.log(isMultipleKeys(student, ["name", "class"]))
  console.log(isMultipleKeys(student, ["name", "Alex"]))
  console.log(isMultipleKeys(student, ["roll_id", "name"]))