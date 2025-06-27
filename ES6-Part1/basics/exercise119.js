/**
 * Write a JavaScript program to create tomorrow's date in a string representation.
 * 
 * output
 * 2018-08-17
   2018-08-17T00:00:00
 */

// my sol
function tomorrow(flag= false) {
    let d = new Date();
    let nextDay = d.getDate()+1;
    let nextDate = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(nextDay).padStart(2,'0')}`;
    return !flag ? nextDate : `${nextDate}T00:00:00`;
}

console.log(tomorrow());      
console.log(tomorrow(true));