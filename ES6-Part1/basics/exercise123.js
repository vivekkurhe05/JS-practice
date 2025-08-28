/**
 * Write a JavaScript program to convert a string to kebab case.
 */

function toKebabCase(str) {
    return str.replace(/[A-Z](?=[a-z])/g, (chr) => "-"+chr.toLowerCase())
    .replace(/[\s\_\-]+/g,"-")
    .replace(/^\-/g,"")
    .replace(/(?<=[a-z])[A-Z]+/g, (chr) => "-"+chr.toLowerCase())
    .replace(/\w/g, chr => chr.toLowerCase());
}

console.log(toKebabCase('camelCase'));
console.log(toKebabCase('some text'));
console.log(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toKebabCase('AllThe-small Things'));
console.log(toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));