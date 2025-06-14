/**
 * Write a JavaScript program to get the first non-null / undefined argument.
 */

// w3resource sol
function coalesce(...args) {
    return args.find(_ => ![undefined, null].includes(_));
}

console.log(coalesce(null, undefined, '', NaN, 'abcd'));