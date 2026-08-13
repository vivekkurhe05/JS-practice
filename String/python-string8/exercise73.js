/**
 * Write a Python program to count Uppercase, Lowercase, special characters and
numeric values in a given string.
 */

function count(str) {

    let upperCaseCount=0, lowerCaseCount=0, numericCount=0;

    const isUpperCase = function(str) {
        for(let chr of str) {
            if(chr >= 'A' && chr <='Z') {
                upperCaseCount++;
            }
        }

        return upperCaseCount;
    }

    const isLowerCase = function(str) {
        for(let chr of str) {
            if(chr >='a' && chr<='z') {
                lowerCaseCount++;
            }
        }

        return lowerCaseCount;
    }

    const isNumeric = function(str) {
        for(let chr of str) {
            if(!isNaN(chr)) {
                numericCount++;
            }
        }

        return numericCount;
    }

    return [isUpperCase(str), isLowerCase(str), isNumeric(str)];
}

console.log(count("@W3Resource.Com"))