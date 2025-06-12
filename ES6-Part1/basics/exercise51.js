/**
 * Write a JavaScript program to get an object containing the current URL parameters.
 * 
 * output:
 * {"name":"Adam","surname":"Smith"}
{}
{}
 */

// my sol
function get_URL_Parameters(url) {

    if(url.indexOf("?") !== -1 ) {
        let params = url.substring(url.indexOf("?")+1);
        params = params.split("&");
        let arr = params.map(el => el.split("="));
        return Object.fromEntries(arr);
    }
    return {};    
}

console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); // Output: { name: 'Adam', surname: 'Smith' }
console.log(get_URL_Parameters('google.com')); // Output: {}
console.log(get_URL_Parameters('https://www.w3resource.com')); // Output: {}