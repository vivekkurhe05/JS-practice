/**
 * Write a Python program to invert a given dictionary with non-unique hashable values.
 * 
 let students = {
    'Ora Mckinney': 8,
    'Theodore Hollandl': 7,
    'Mae Fleming': 7,
    'Mathew Gilbert': 8,
    'Ivan Little': 7,  
}

output:
{
  '7': [ 'Theodore Holland', 'Mae Fleming', 'Ivan Little' ],
  '8': [ 'Ora Mckinney', 'Mathew Gilbert' ]
}
 */

let students = {
  'Ora Mckinney': 8,
  'Theodore Hollandl': 7,
  'Mae Fleming': 7,
  'Mathew Gilbert': 8,
  'Ivan Little': 7,  
};

let obj = {};

for(let key in students) {
  if(!(students[key] in obj)) {
    obj[students[key]] = [key];
  }else {
    obj[students[key]].push(key)
    obj[students[key]] = obj[students[key]]
  }
}

console.log(obj);