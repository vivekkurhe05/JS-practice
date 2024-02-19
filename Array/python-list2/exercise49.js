/**
 * Write a Python program to convert a list to a list of dictionaries.
 * [{'color_name': 'Black', 'color_code': '#000000'}, {'color_name': 'Red', 'color_code': '#FF0000'}, {'color_nam
e': 'Maroon', 'color_code': '#800000'}, {'color_name': 'Yellow', 'color_code': '#FFFF00'}]
 * 
 */

// my solution
let color_name = ["Black", "Red", "Maroon", "Yellow"]
let color_code = ["#000000", "#FF0000", "#800000", "#FFFF00"]
let newarr = []
if(color_name.length === color_code.length) {
    for(let i=0; i<color_name.length; i++) {
        newarr.push({color_name:color_name[i], color_code:color_code[i]})
    }
}
console.log(newarr)