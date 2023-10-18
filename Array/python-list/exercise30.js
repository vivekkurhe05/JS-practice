/**
 * Write a Python program to get the frequency of elements in a list.
 * output:
 * {
 * 10:4,
 * 20:4,
 * 40:2,
 * 50:2,
 * 30:1
 * }
 */

// my solution
function get_frequency(arr) {
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        let index = arr.indexOf(arr[i])
        let count = 0
        while(index!=-1) {
            count++
            index = arr.indexOf(arr[i], index+1)
            obj[arr[i]] = count
        }
    }
    

    return obj

}

let my_list = [10,10,10,10,20,20,20,20,40,40,50,50,30]

console.log(get_frequency(my_list))