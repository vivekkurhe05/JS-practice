/**
 * Write a Python program to find items starting with a specific character from a list.
Expected Output:
Original list:
['abcd', 'abc', 'bcd', 'bkie', 'cder', 'cdsw', 'sdfsd', 'dagfa', 'acjd']
Items start with a from the said list:
['abcd', 'abc', 'acjd']
Items start with d from the said list:
['dagfa']
Items start with w from the said list:
[]
 */

// my solution
let list1 = ['abcd', 'abc', 'bcd', 'bkie', 'cder', 'cdsw', 'sdfsd', 'dagfa', 'acjd']
console.log(list1.filter(el => el.startsWith("a")))
console.log(list1.filter(el => el.startsWith("d")))
console.log(list1.filter(el => el.startsWith("w")))
console.log(list1.filter(el => el.indexOf("a")=== 0))
console.log(list1.filter(el => el.indexOf("d")=== 0))
console.log(list1.filter(el => el.indexOf("w")=== 0))