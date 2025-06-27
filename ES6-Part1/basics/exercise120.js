/**
 * Write a JavaScript program to convert a string to snake case.
 * 
 * output:
camel_case
some_text
some_mixed_string_with_spaces_underscores_and_hyphens
all_the_small_things
i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html
 */

// my sol
function toSnakeCase(str) {
    const re = /[A-Z\s-](?=[a-z])/g;
    return str.replace(re, (chr) => {
        return str.indexOf(chr) === 0 ? chr.toLowerCase() : "_"+chr.toLowerCase()
    })
    .replace(re, "")
    .replace(/\s/g,"")
    .replace(/[A-Z]+(?![a-z])/g, (chr) => {
        return str.indexOf(chr) === 0 ? chr.toLowerCase() : "_"+chr.toLowerCase()
    })
}

console.log(toSnakeCase('camelCase'));
console.log(toSnakeCase('some text'));
console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toSnakeCase('AllThe-small Things'));
console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));