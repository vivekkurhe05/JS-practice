/**
 * Write a JavaScript program to parse a HTTP Cookie header string and return an 
 * object of all cookie name-value pairs.
 * {"foo":"bar","equation":"E=mc^2"}
 */

// my sol
function parseCookie(cookie) {
    let pairs = cookie.split(";");
    let arr = pairs.map(pair => pair.split("="));
    let result = arr.map(subarr => subarr.map(el => decodeURIComponent(el.trim())));
    return Object.fromEntries(result);
}

console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));

