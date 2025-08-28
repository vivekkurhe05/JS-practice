/**
 * Write a JavaScript program to remove HTML/XML tags from strings.
 */

// my sol
function stripHTMLTags(html) {
    const re = /<\/?\w+>/g;
    return html.replace(re,"");
}

console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));