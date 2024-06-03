/**
 * 
 * Write a JavaScript function to insert a string within a string at a particular position (default is 1).
 * Test Data :
 * console.log(insert('We are doing some exercises.'));
 * console.log(insert('We are doing some exercises.','JavaScript '));
 * console.log(insert('We are doing some exercises.','JavaScript ',18));
 * "We are doing some exercises."
 * "JavaScript We are doing some exercises."
 * "We are doing some JavaScript exercises."
 */


function insert(str, substr, pos){
    if(substr === undefined && pos === undefined) return str
    if(pos === undefined) return substr+str
    return str.substring(0,pos)+substr+str.substring(pos)
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));