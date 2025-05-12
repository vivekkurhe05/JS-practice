/**
 * Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
 */

// or w3resource sol

function csv_to_array(data, delimiter = ',', omitFirstRow = false) {
    data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
}
  
// Test cases
console.log(csv_to_array('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]
console.log(csv_to_array('a;b\nc;d', ';')); // [['a', 'b'], ['c', 'd']]
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true)); // [['a', 'b'], ['c', 'd']]


// my sol
function csv_to_array(str, del=",", flag=false) {
    let firstPart ="", secondPart ="";
    if(flag) {
        let startIndex = str.indexOf('\n')+1;
        str = str.slice(startIndex)
        firstPart = str.slice(0, startIndex-1).split(del);
        secondPart = str.slice(startIndex).split(del);

    }
    firstPart =  str.slice(0, str.indexOf('\n')).split(del);
    secondPart = str.slice(str.indexOf('\n')+1).split(del);

    return [firstPart, secondPart]
}

console.log(csv_to_array('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]
console.log(csv_to_array('a;b\nc;d', ';')); // [['a', 'b'], ['c', 'd']]
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true)); // [['a', 'b'], ['c', 'd']]

