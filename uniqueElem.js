// my solution
// it returns all elements excluding repeated elements
function uniqueElem(arr){
    let obj = {}
    let result = []
    for(let i=0;i<arr.length;i++){
        if(!(arr[i] in obj)){
            obj[arr[i]] = true
        }else{
            obj[arr[i]] = false
        }
    }
    for(let key in obj){
        if(obj[key]) result.push(key)
    }
    return result
}

console.log(uniqueElem([1,2,1,2,3]))