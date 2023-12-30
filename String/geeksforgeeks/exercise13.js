/**
 * How to get the longest string in an array using JavaScript ?
 */

// do this properly

// my solution
function longest_str(arr) {
    return arr.sort((a,b) => a.length-b.length)[arr.length-1]
}

let arr = ["A_Copmuter_Science_Portal", "GeeksforGeeks", "GFG", "geeks"];
console.log(longest_str(arr));

// or

// my solution
function longest_str2(arr2) {
    let max = arr2[0].length

    arr.map(el => {
        max = Math.max(max, el.length)
        return max
    })

    return arr.filter(el => el.length === max)
}

let arr2 = ["A_Copmuter_Science_Portal", "GeeksforGeeks", "GFG", "geeks"];
console.log(longest_str2(arr2));