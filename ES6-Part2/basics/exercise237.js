/**
 * Write a JavaScript program to generate an array containing the Fibonacci sequence, up to the nth term.
 */

// w3resource sol
function fibonacci(num) {
    return Array.from({length: num}).reduce((acc, cur, i) => {
        if(i > 1) {
            acc[i] = acc[i-1] + acc[i-2]
        }else{
            acc[i] = i
        }
        return acc;
    }, [])
}

console.log(fibonacci(2)); // Output: [0, 1]
console.log(fibonacci(3)); // Output: [0, 1, 1]
console.log(fibonacci(6)); // Output: [0, 1, 1, 2, 3, 5]