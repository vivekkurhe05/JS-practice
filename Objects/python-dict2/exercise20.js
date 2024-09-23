/**
 * Write a Python program to print all distinct values in a dictionary.
Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}
 */

let arr=[
    {"V":"S001"}, 
    {"V": "S002"}, 
    {"VI": "S001"}, 
    {"VI": "S005"}, 
    {"VII":"S005"}, 
    {"V":"S009"},
    {"VIII":"S007"}
]

let unique_vals= []
for(let i=0;i<arr.length;i++){
    for(let key in arr[i]){
        if(!unique_vals.includes(arr[i][key])) unique_vals.push(arr[i][key])
    }
}
console.log(unique_vals)

// or

arr=arr.map(el => {
    return Object.values(el)
})
arr=arr.flat(Infinity)
let set=new Set(arr)
arr=Array.from(set)
console.log(arr)