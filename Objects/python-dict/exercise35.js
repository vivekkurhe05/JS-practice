/**
 * Write a Python program to sort Counter by value.
 * Sample data : {'Math':81, 'Physics':83, 'Chemistry':87}
Expected data: [('Chemistry', 87), ('Physics', 83), ('Math', 81)]
 */

// my solution
let dict={'Math':81, 'Physics':83, 'Chemistry':87}

let arr = Object.entries(dict)

arr=arr.sort((a,b)=>b[1]-a[1])

dict=Object.fromEntries(arr)
console.log(dict)