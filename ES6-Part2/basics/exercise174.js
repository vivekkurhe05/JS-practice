/**
 * Write a JavaScript program to convert a NodeList into an array.
 */

function nodeListToArray(nodeList) {
    return [...nodeList];
}

console.log(nodeListToArray(document.childNodes));