/**
 * Write a JavaScript program to filter an array of objects based on a 
 * condition while also filtering out unspecified keys.
 * 
 * Output: [{ id: 2, name: 'mike' }]
 */

// my sol
function reducedFilter(arrOfObj, arrOfKeys, fn) {
    return arrOfKeys.reduce((acc, cur) => {
        for(let i=0; i<arrOfObj.length; i++) {
            if(fn(arrOfObj[i])) { 
                acc[cur] = arrOfObj[i][cur];
            }
        }
        return acc;
    }, {});
}

const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

console.log(reducedFilter(data, ['id', 'name'], item => item.age > 24));