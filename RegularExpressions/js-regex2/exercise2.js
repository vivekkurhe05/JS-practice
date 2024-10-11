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

function is_AmericanExpress(str){}


// console.log(is_AmericanExpress("349032457890234"));
// console.log(is_AmericanExpress("374567321897345"));
// console.log(is_AmericanExpress("359032457890234"));
// console.log(is_AmericanExpress("364567321897345"));
// console.log(is_AmericanExpress("3745673218973"));

function is_Visa(str){}
// console.log(is_Visa("4890932123456"));
// console.log(is_Visa("4890932123456890"));
// console.log(is_Visa("5890932123456"));

function is_MasterCard(str){}
// console.log(is_MasterCard("5189093434567890"));
// console.log(is_MasterCard("5289093434567890"));
// console.log(is_MasterCard("5389093434567890"));
// console.log(is_MasterCard("5489093434567890"));
// console.log(is_MasterCard("5589093434567890"));
// console.log(is_MasterCard("5689093434567890"));
// console.log(is_MasterCard("51890934345678"));

function is_Discover(str){}
// console.log(is_Discover("6011789323443322"));
// console.log(is_Discover("589043456543212"));
// console.log(is_Discover("6012789323443322"));
// console.log(is_Discover("58904345654321"));

function is_DinersClub(str){}
// console.log(is_DinersClub("30078943234532"));
// console.log(is_DinersClub("30178943234532"));
// console.log(is_DinersClub("30278943234532"));
// console.log(is_DinersClub("30378943234532"));
// console.log(is_DinersClub("30478943234532"));
// console.log(is_DinersClub("30578943234532"));
// console.log(is_DinersClub("36778943234532")); // true
// console.log(is_DinersClub("38789432345329")); // true
// console.log(is_DinersClub("30678943234532")); // false
// console.log(is_DinersClub("30878943234532")); // false
// console.log(is_DinersClub("35978943234532")); // false
// console.log(is_DinersClub("37789432345392")); // false
// console.log(is_DinersClub("30778943234532")); // false

function is_JCB(str){}
// console.log(is_JCB("213189943322111"));
// console.log(is_JCB("180056789432123"));
// console.log(is_JCB("358904356789000333"));
// console.log(is_JCB("213078990003213"));
// console.log(is_JCB("190078990003213"));

function is_creditCard(str){}
console.log(is_creditCard("378282246310006")); // true
console.log(is_creditCard("378282246300064354")); // false
console.log(is_creditCard("37828224630006")); // false