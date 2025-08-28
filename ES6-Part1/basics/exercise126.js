/**
 * Write a JavaScript program to create a specified currency format from a given number.

Use Intl.NumberFormat to enable country / currency sensitive formatting.
 */

// w3resource sol
function toCurrency(num, cur, lang_format = undefined) {
    return Intl.NumberFormat(lang_format, {style: "currency", currency: cur}).format(num);
}

console.log(toCurrency(123456.789, 'EUR')); // Output: "€123,456.79"
console.log(toCurrency(123456.789, 'USD', 'en-us')); // Output: "$123,456.79"
console.log(toCurrency(123456.789, 'USD', 'fa')); // Output: "۱۲۳٬۴۵۶٫۷۹ US$"
console.log(toCurrency(322342436423.2435, 'JPY')); // Output: "¥322,342,436,423"
console.log(toCurrency(322342436423.2435, 'JPY', 'fi')); // Output: "322 342 436 423 ¥"