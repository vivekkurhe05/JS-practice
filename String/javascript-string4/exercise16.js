/**
 * 
 * Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
 * Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
 * Test Data :
 * console.log(text_truncate('We are doing JS string exercises.'))
 * console.log(text_truncate('We are doing JS string exercises.',19))
 * console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 * "We are doing JS string exercises."
 * "We are doing JS ..."
 * "We are doing !!"
 */

// my sol
function text_truncate(str, num, sep) {
    let title=""
    if(num === undefined) title= str
    else if(sep === undefined) {
        sep = "..."
        title=str.replace(str.substring(num-sep.length), sep)
    }else{
        title=str.replace(str.substring(num-sep.length), sep)
    }
    return title
}


console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))