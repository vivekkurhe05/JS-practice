/**
 * Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. 
 * The first row of the string is used as the title row.
 */

// do this
function CSV_to_JSON(str, del=',') {
    const obj = {};
    let arr = [];
    let headingIndex = str.indexOf('\n');
    let heading = str.slice(0, headingIndex).split(del);
    let values = str.slice(headingIndex+1).split('\n').map(el => el.split(del));

    heading.forEach((key,i) => {
        if(!(key in obj)) {
            obj[key] = values[0][i];
        }
        arr.push(obj);
    });
    
    return arr;
}

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];