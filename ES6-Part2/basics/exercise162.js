/**
 * Write a JavaScript program to convert an asynchronous function to return a promise.
 */

// chatgpt sol
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

delay(2000).then(() => console.log('Hi!'));