/**
 * Write a JavaScript program to join all given URL segments together, 
 * then normalize the resulting URL.
 * 
 * Output: http://www.google.com/a/b/cd?foo=123&bar=foo
 */

// my sol
function URL_Join() {
    let arr = Array.prototype.slice.call(arguments);
    let endPoint = arr.slice(1);
    endPoint = endPoint.join("/");
    let cleanEndPoint = endPoint.replace(/\/\//g, "/")
    .replace(/.(?=\?)/g, "");

    return `${arr[0]}/${cleanEndPoint}`;
}

// Test case
console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));