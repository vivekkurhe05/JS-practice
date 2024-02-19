/**
 * Write a Python program to check whether all dictionaries in a list are empty or not.
Sample list : [{},{},{}]
Return value : True
Sample list : [{1,2},{},{}]
Return value : False
 */

let list1 = [{},{},{}]
let list2 = [{"1":"2"},{},{}]

function isEmpty(list) {
    return list.every(obj=>{
        for(let prop in obj) {
            if(obj.hasOwnProperty(prop)) return false
        }
        return true
    })
}


console.log(isEmpty(list1))
console.log(isEmpty(list2))