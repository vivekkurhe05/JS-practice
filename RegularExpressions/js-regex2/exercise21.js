/**
 * Write a JavaScript function to print an integer with commas as thousands separators.
 * 
 * Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"
 */

// my solution
function thousands_separators(num){
    const re = /\B(?=(\d{3})+(?!\d))/g
    return num.toString().replace(re,",")
}

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000000));