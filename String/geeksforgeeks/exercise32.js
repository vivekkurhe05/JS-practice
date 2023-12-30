/**
 * Check if a String is valid JSON string
 */

// my solution
function isValidJSON(input) {

    if(typeof input !== "string") return false

    try{
        JSON.parse(input)
        return true
    }catch(err) {
        return false
    }
    
}

console.log(isValidJSON('{"prop1":"val_1", "prop2":"val_2"}'))
console.log(isValidJSON('{"prop1":val_1, "prop2":"val_2"}'))