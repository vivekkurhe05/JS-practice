/**
 * Write a Python program to create and display all combinations of letters, selecting each letter 
 * from a different key in a dictionary.
Sample data : {'1':['a','b'], '2':['c','d']}
Expected Output:
ac
ad
bc
bd
 */

//chat gpt
function getCombinations(data) {
    let keys = Object.keys(data);
    let result = [];

    function combine(prefix, index) {
        if (index === keys.length) {
            result.push(prefix);
            return;
        }
        
        let currentKey = keys[index];
        for (let char of data[currentKey]) {
            combine(prefix + char, index + 1);
        }
    }

    combine('', 0);
    return result;
}

let data = {'1': ['a','b'], '2': ['c','d']};
let combinations = getCombinations(data);

combinations.forEach(combination => console.log(combination));

