/**
 * A Python Dictionary contains List as a value. Write a Python program to update the list values in the said dictionary.
Original Dictionary:
{'Math': [88, 89, 90], 'Physics': [92, 94, 89], 'Chemistry': [90, 87, 93]}
Update the list values of the said dictionary:
{'Math': [89, 90, 91], 'Physics': [90, 92, 87], 'Chemistry': [90, 87, 93]}
 */

const obj = {'Math': [88, 89, 90], 'Physics': [92, 94, 89], 'Chemistry': [90, 87, 93]}

for(let key in obj) {
    if(key === "Math")
        obj[key] = obj[key].map(val => val+1);
    else if(key === "Physics")
        obj[key] = obj[key].map(val => val-2);
    else if(key === "Chemistry")
        obj[key] = obj[key];
}

console.log(obj);