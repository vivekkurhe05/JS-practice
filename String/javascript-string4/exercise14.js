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

// my sol
function insert(str, substr, pos) {
    let title=""
    if(substr === undefined) title=str
    else if(pos === undefined) title = substr+str
    else title= str.substring(0, 18) + substr + str.substring(18)
    return title
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));