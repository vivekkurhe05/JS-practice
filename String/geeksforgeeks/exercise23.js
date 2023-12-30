/**
 * Replace multiple strings with multiple other strings
 * e.g. 
 * Replace Lenovo with Dell
 * Honor with OnePlus
 * Samsung with Lenovo
 */

// my solution
function replace(str) {
    let re = /(Lenovo|Honor|Sansung)/g

    return str.replace(re, (chr) => {
        let obj = {
            "Lenovo":"Dell",
            "Honor":"OnePlus",
            "Samsung":"Lenovo"
        }

        return obj[chr]
    })
}

console.log(replace("I have a Lenovo Laptop, a Honor Phone, and a Samsung Tab."))