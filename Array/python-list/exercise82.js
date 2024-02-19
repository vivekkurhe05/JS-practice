/**
 * Write a Python program to generate combinations of n distinct objects taken from the elements of a given list.
Original list: [1, 2, 3, 4, 5, 6, 7, 8, 9] Combinations of 2 distinct objects: 
[1, 2] [1, 3] [1, 4] [1, 5] .... [7, 8] [7, 9] [8, 9]
 */

// my solution
function distict_objects(arr) {

    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            let sublist=[]
            sublist.push(arr[i],arr[j])
            console.log(sublist)
        }
    }
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
distict_objects(list)