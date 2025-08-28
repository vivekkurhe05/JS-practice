/**
 * Write a JavaScript program to generate the human-readable format in the given number of milliseconds.
 */

// w3resource sol
function formatDuration(ms) {
    if(ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000,
    }

    console.log(Object.entries(time));
    return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
    .join(', ');
}

console.log(formatDuration(1001)); // Output: "1 second, 1 millisecond"
console.log(formatDuration(34325055574));