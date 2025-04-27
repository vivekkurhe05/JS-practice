/**
 * Write a Python program to check if multiple keys exist in a dictionary.
 */

function isMultipleKeys(obj, keys) {
  return keys.every(key => key in obj);
}

student = {
    'name': 'Alex',
    'class': 'V',
    'roll_id': '2'
  }

  console.log(isMultipleKeys(student, ["name", "class"]))
  console.log(isMultipleKeys(student, ["name", "Alex"]))
  console.log(isMultipleKeys(student, ["roll_id", "name"]))