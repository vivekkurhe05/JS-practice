/**
 * Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. 
 * The first row of the string is used as the title row.
 */

// w3resource sol
function CSV_to_JSON(str, del=',') {
    const titles = str.slice(0, str.indexOf('\n')).split(del);

    return str.slice(str.indexOf('\n')+1).split('\n')
    .map(el => {
        const values = el.split(del);
        return titles.reduce((acc, cur, i) => {
            if(acc) {
                acc[cur] = values[i]
            }
            return acc;
        }, {})
    })
    
}

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];