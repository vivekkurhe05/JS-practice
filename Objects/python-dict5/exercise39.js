/**
 * Write a Python program to store dictionary data in a JSON file.
 * Original dictionary:
{'students': [{'firstName': 'Nikki', 'lastName': 'Roysden'}, {'firstName': 'Mervin', 'lastName': 'Friedland'}, {'firstName': 'Aron ', 'lastName': 'Wilkins'}], 'teachers': [{'firstName': 'Amberly', 'lastName': 'Calico'}, {'firstName': 'Regine', 'lastName': 'Agtarap'}]}
<class 'dict'>
Json file to dictionary:
{'students': [{'firstName': 'Nikki', 'lastName': 'Roysden'}, {'firstName': 'Mervin', 'lastName': 'Friedland'}, {'firstName': 'Aron ', 'lastName': 'Wilkins'}], 'teachers': [{'firstName': 'Amberly', 'lastName': 'Calico'}, {'firstName': 'Regine', 'lastName': 'Agtarap'}]}
 */

const students_details = {
    'students': [
        {'firstName': 'Nikki', 'lastName': 'Roysden'}, 
        {'firstName': 'Mervin', 'lastName': 'Friedland'}, 
        {'firstName': 'Aron ', 'lastName': 'Wilkins'}
    ], 
    'teachers': [
        {'firstName': 'Amberly', 'lastName': 'Calico'}, 
        {'firstName': 'Regine', 'lastName': 'Agtarap'}
    ]
}

let studentsData = JSON.stringify(students_details);
console.log(studentsData);
console.log(JSON.parse(studentsData));