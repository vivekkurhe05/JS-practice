/**
 * Write a Python program to convert a date of yyyy-mm-dd format to dd-mm-yyyy format.
 */

// my solution
function change_date_format(str){
    const re = /(\d{4})-(\d{2})-(\d{2})/g
    return str.replace(re, "$3-$2-$1")
}

console.log(change_date_format("2026-01-02"));