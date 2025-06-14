/**
 * Write a JavaScript program to compute the average of an array, 
 * after mapping each element to a value using the provided function.
 */

// chatgpt sol
function averageBy(arr, fn) {

    let sum = 0;
    let getValue = typeof fn === "function" ? fn : val => val[fn];

    for(const item of arr) {
        sum += getValue(item);
    }

    return sum/arr.length;
}

console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a)); // Output: 50 (average of 'a' property)
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a')); // Output: 5 (average of 'a' property)


// w3resource sol

function averageBy2(arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, cur) => {
        return acc+cur;
    }, 0)/arr.length;
}

console.log(averageBy2([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(averageBy2([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));