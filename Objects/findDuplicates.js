function findDuplicates(arr) {
    const duplicates = [];
    const obj = {};

    for(let i=0;i<arr.length;i++) {
        if(!(arr[i] in obj)) {
            obj[arr[i]] = false;
        }else {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1,2,3,4,4,5,6,6]))