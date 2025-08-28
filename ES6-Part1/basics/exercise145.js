/**
 * Write a JavaScript program to randomize the order of array values, returning an updated array.
 */

// chatgpt sol
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

const foo = [1, 2, 3];
console.log(shuffle(foo));