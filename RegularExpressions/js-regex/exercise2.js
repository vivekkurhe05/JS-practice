/**
 * Write a JavaScript program to check a credit card number.

Here are some format of some well-known credit cards.

American Express :- Starting with 34 or 37, length 15 digits.
Visa :- Starting with 4, length 13 or 16 digits.
MasterCard :- Starting with 51 through 55, length 16 digits.
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
 */

console.log(is_creditCard("378282246310006")); // true
console.log(is_creditCard("378282246300064354")); // false
console.log(is_creditCard("37828224630006")); // false