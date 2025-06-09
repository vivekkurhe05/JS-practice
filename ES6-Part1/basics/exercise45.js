/**
 * Write a JavaScript program to split values into two groups. 
 * If an element in the filter is true, the corresponding element in the collection 
 * belongs to the first group; otherwise, it belongs to the second group.
 */

// my sol
function bifurcate(valArr, boolArr) {

    return valArr.reduce((acc, cur, i) => {
        if(cur && boolArr[i]) {
            acc[0].push(cur)
        }else{
            acc[1].push(cur)
        }
        return acc;
    }, [[],[]]);
}

console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));