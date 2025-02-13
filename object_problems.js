/**
 * python-dict - exercise 17
 * 
 * Write a Python program to remove duplicates from the dictionary.
 */

/**
 * python-dict - exercise 19
 * 
 * Write a Python program to combine two dictionary by adding values for common keys.
d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
Sample output: Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})
 */

/**
 * python-dict - exercise 20
 * 
 * Write a Python program to print all distinct values in a dictionary.
Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}
 */

/**
 *  python-dict4 - exercise 23
 * 
 * Write a Python program to combine values in a list of dictionaries.
Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}]
Expected Output: Counter({'item1': 1150, 'item2': 300})
 */

/**
 * python-dict - exercise 27
 * 
 * Write a Python program to convert a list into a nested dictionary of keys.
 */


/**
 * python-dict - exercise 37
 * 
 * Write a Python program to replace dictionary values with their sums.
 */


/**
 * python-dict - exercise 38
 * 
 * Write a Python program to match key values in two dictionaries.
 * 
 * let x = {'key1': 1, 'key2': 3, 'key3': 2}
let y = {'key1': 1, 'key2': 2}
 */

/**
 * python-dict - exercise 43
 * 
 * Write a Python program to convert more than one list to a nested dictionary.
Original strings:
['S001', 'S002', 'S003', 'S004']
['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
[85, 98, 89, 92]
Nested dictionary:
[{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}}, {'S004': {'Saim Richards': 92}}]
 */

/**
 * python-dict - exercise 42
 * 
 * Write a Python program to remove a specified dictionary from a given list.
Original list of dictionary:
[{'id': '#FF0000', 'color': 'Red'}, {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
Remove id #FF0000 from the said list of dictionary:
[{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
 */

/**
 * python-dict4 exercise 46
 * 
 * Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists.
Original list:
[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
Grouping a sequence of key-value pairs into a dictionary of lists:
{'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}
 */

/**
 * python-dict4 exercise47
 * 
 * Write a Python program to split a given dictionary of lists into lists of dictionaries.
Original dictionary of lists:
{'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
Split said dictionary of lists into list of dictionaries:
[{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language': 84}, {'Science': 95, 'Language': 80}]
 */

/**
 * python-dict4 exercise48
 * 
 * Write a Python program to remove a specified dictionary from a given list.
Original list of dictionary:
[{'id': '#FF0000', 'color': 'Red'}, {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
Remove id #FF0000 from the said list of dictionary:
[{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
 */

/**
 * python-dict4 exercise61
 * 
 * Write a Python program to count the frequency of a dictionary.
Original Dictionary:
{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
Count the frequency of the said dictionary:
Counter({10: 2, 40: 2, 20: 2, 70: 1, 80: 1})
*/

/**
 * python-dict4 exercise62
 * 
 * Write a Python program to extract values from a given dictionary and create a list of lists from those values.
Original Dictionary:
[{'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'}, {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}]
Extract values from the said dictionarie and create a list of lists using those values:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
[
    [1, 'Jean Castro'], 
    [2, 'Lula Powell'], 
    [3, 'Brian Howell'], 
    [4, 'Lynne Foster'], 
    [5, 'Zachary Simon']
]
[
    ['Jean Castro', 'V'], 
    ['Lula Powell', 'V'], 
    ['Brian Howell', 'VI'], 
    ['Lynne Foster', 'VI'], 
    ['Zachary Simon', 'VII']
]
 */

/**
 * 
 * python-dict4 exercise63
 * 
 * Write a Python program to convert a given list of lists to a dictionary.
Original list of lists:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
Convert the said list of lists to a dictionary:
{
    1: ['Jean Castro', 'V'], 
    2: ['Lula Powell', 'V'], 
    3: ['Brian Howell', 'VI'], 
    4: ['Lynne Foster', 'VI'], 
    5: ['Zachary Simon', 'VII']
}
 */

/**
 * python-dict4 exercise67
 * 
 * Write a Python program to invert a given dictionary with non-unique hashable values.
 * 
 let students = {
    'Ora Mckinney': 8,
    'Theodore Hollandl': 7,
    'Mae Fleming': 7,
    'Mathew Gilbert': 8,
    'Ivan Little': 7,  
}

output:
{
  '7': [ 'Theodore Holland', 'Mae Fleming', 'Ivan Little' ],
  '8': [ 'Ora Mckinney', 'Mathew Gilbert' ]
}
 */

/**
 * python-dict4 exercise68
 * 
 * Write a Python program to combine two or more dictionaries, creating a list of values for each key.
Sample Output:
Original dictionaries:
{'w': 50, 'x': 100, 'y': 'Green', 'z': 400}
{'x': 300, 'y': 'Red', 'z': 600}
Combined dictionaries, creating a list of values for each key:
{'w': [50], 'x': [100, 300], 'y': ['Green', 'Red'], 'z': [400, 600]}
 */

/**
 * is-equal.js
 * 
 * Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 */