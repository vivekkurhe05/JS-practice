/**
 * Write a JavaScript program to get a string like HH:MM:SS from a Date object.
 */

// w3resource sol
function getColonTimeFromDate(date) {
    return date.toTimeString().slice(0,8);
}

console.log(getColonTimeFromDate(new Date()));