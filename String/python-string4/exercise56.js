/**
 * Write a Python program to find the second most repeated word in a given string.
 */

// my sol
function second_most_repeated_word(str) {
    let obj={}
    let arr =str.split(" ")
    for(let i=0;i<arr.length;i++) {
        let index=arr.indexOf(arr[i])
        let count=0
        while(index!=-1){
            count++
            index=arr.indexOf(arr[i],index+1)
            obj[arr[i]] = count
        }
    }
    return Object.entries(obj).sort((a,b) => b[1]-a[1])[1][0]
}

console.log(second_most_repeated_word("ab ca bc ab ca")) // ca
console.log(second_most_repeated_word("ab ca bc ab ca ab bc")) // ca
console.log(second_most_repeated_word("ab ca bc ca ab bc")) // ca
console.log(second_most_repeated_word("ab ab ab sa ca sa bc")) // sa