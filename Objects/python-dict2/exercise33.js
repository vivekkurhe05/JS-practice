/**
 * Write a Python program to check if multiple keys exist in a dictionary.
 */

// my solution
function isMultipleKeys(obj, keys){
    return keys.every((key) => obj.hasOwnProperty(key))
}

student = {
    'name': 'Alex',
    'class': 'V',
    'roll_id': '2'
  }

  console.log(isMultipleKeys(student, ["name", "class"])) // true
  console.log(isMultipleKeys(student, ["name", "Alex"])) // false
  console.log(isMultipleKeys(student, ["roll_id", "name"])) // true