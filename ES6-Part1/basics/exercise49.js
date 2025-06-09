/**
 * Write a JavaScript program to retrieve a set of properties indicated 
 * by the given selectors from an object.
 * 
 * Output: [ 'val to select', 1, 'test' ]
 */

// w3resource sol
function get(from, ...selectors) {
    return selectors.map(key => {
        return key.replace(/\[([^\[\]]*)\]/g, '.$1.').split(".")
        .filter(el => el !== "")
        .reduce((acc, cur) => {
            return acc && acc[cur];
        }, from);
    })
}

const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a'));
