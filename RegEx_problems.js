/**
 * python-regex - exercise12
 * 
 * Write a Python program that matches a word containing 'z'.
 * console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false
 */

/**
 * python-regex - exercise13
 * 
 * Write a Python program that matches a word containing 'z', not at the start or end of the word.
 * console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false
 */


/**
 * python-regex - exercise54
 * 
 * Write a Python program to concatenate the consecutive numbers in a given string.
 * 
Original string:
Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.
After concatenating the consecutive numbers in the said string:
Enter at 120 Kearny Street. The security desk can direct you to floor 16. Please have your identification ready.
 */


/**
 * python-regex - exercise55
 * 
 * Write a Python program to convert a given string to snake case.
 * 
 * output
 * java-script
    gd-script
    btw...-what-*-do*-you-call-that-naming-style?-snake-case?

    console.log(snake_case("JavaScript"));
console.log(snake_case("GDScript"));
console.log(snake_case("BTW...what *do* you call that naming style? snake_case? "));
 */


/**
 * java-regex2 -  exercise18
 * 
 * Write a Java program to validate a personal identification number (PIN).
 * Assume the length of a PIN number is 4, 6 or 8.
 */


/**
 *java-regex2 - exercise20
 *  
 * Write a Java program that takes a number and set thousands separator in that number.
 */

 /**
  * java-regex2 - exercise1
  * 
 * Write a Java program to check whether a string contains
 * only a certain set of characters (in this case a-z, A-Z and 0-9).
 */

 /**
  * java-regex2 - exercise29
  * 
 * Write a Java program to check if a given string is a Mathematical Expression or not.
 */

/**
 * java-regex - exercise6
 * 
 * Write a Java program to check a word contains the character 'g' in a given string.
 */

/**
 * java-regex - exercise17
 * 
 * Write a Java program to count the number of decimal places in a given number.
 */

/**
 * java-regex5 - exercise26
 * 
 * Write a Java function to check whether a given value is hexcolor value or not.
 * hexcolor is either 3 or 6 characters long
 * hexcolor should start with #
 * hexcolor contains either digits or alphabets or alphanumeric
 * digits range from 0-9
 * alphabets range from a-f or A-F
 */

/**
 * java-regex5 - exercise27
 * 
 * Write a Java program to add a dash before and after every vowel in a given string.
 * 
 */

/**
 * java-regex5 - exercise29
 * 
 * Write a Java program to check if a given string is a Mathematical Expression or not.
 * console.log(validate("10")); // true
console.log(validate("10+20")); // true
console.log(validate("10*20*30")); // true
console.log(validate("-10*20--30")); // true
console.log(validate("-10*20--2e4")); // true
console.log(validate("100+")); // false
console.log(validate("100+foo")); // false
console.log(validate("10*+20*30")); // false
 */

/**
 * ES6-part1- basics - exercise12
 * 
 * Write a JavaScript program to remove non-printable ASCII characters from a given string.
 */

/**
 * java-regex6 - exercise22
 * Write a Java program to validate a given phone number.
 * 
 * Following are valid phone number examples:
“(123)4567890", "1234567890", "123-456-7890", "(123)456-7890",
Following are invalid phone numbers:
"(1234567890)","123)4567890", "12345678901", "(1)234567890", "(123)-4567890", "1", "12-3456-7890", "123-4567", "Hello world"

Regex explanation:
^\\(? - May start with an option "("
(\\d{3}) - Followed by 3 digits
\\)? - May have an optional ")"
[- ]? - May have an optional "-" after the first 3 digits or after optional ) character
(\\d{3}) - Followed by 3 digits.
[- ]? - May have another optional "-" after numeric digits
(\\d{4})$ - ends with four digits
 */