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

// my solution
function test(stud) {
    let obj = {}
    for(let key in stud) {
        let val = []
        if(stud[key] in obj){
            obj[stud[key]].push(key)
            
        }else{
            val.push(key)
            obj[stud[key]] = val
        }
    }
    return obj
}

let students = {
    'Ora Mckinney': 8,
    'Theodore Hollandl': 7,
    'Mae Fleming': 7,
    'Mathew Gilbert': 8,
    'Ivan Little': 7,  
}

console.log(test(students))