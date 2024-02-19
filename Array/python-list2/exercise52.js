/**
 * Write a Python program to compute the difference between two lists.
Sample data: ["red", "orange", "green", "blue", "white"], ["black", "yellow", "green", "blue"]
Expected Output:
Color1-Color2: ['white', 'orange', 'red']
Color2-Color1: ['black', 'yellow']
 */

// my solution
function difference(arr1, arr2) {
    newarr1 = arr1.filter(el => !arr2.includes(el))
    newarr2 = arr2.filter(el => !arr1.includes(el))

    return {
        'Color1-color2': newarr1,
        'Color2-Color1': newarr2
    }
}

let arr1 = ["red", "orange", "green", "blue", "white"]
let arr2 = ["black", "yellow", "green", "blue"]
console.log(difference(arr1, arr2))