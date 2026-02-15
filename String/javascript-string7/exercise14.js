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

function insert(input, substr, index) {
    if(index === undefined) {
        index = 0;
    }

    if(substr === undefined) {
        return input;
    }

    return input.substring(0, index) +substr+input.substring(index)
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));