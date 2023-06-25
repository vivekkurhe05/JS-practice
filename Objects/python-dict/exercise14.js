/**
 * Write a Python program to sort a given dictionary by key.
 */

// my solution
color_dict = {'red':'#FF0000',
          'green':'#008000',
          'black':'#000000',
          'white':'#FFFFFF'}

let arr=Object.entries(color_dict)
arr=arr.sort((a,b)=>a[0].localeCompare(b[0]))
console.log(Object.fromEntries(arr))