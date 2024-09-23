/**
 * Write a Python program to extract year, month and date from an url
 */

// my solution
function extractDate(str) {
    const re = /\d{4}\/\d{2}\/\d{2}/g
    return str.match(re)
}

let url1 =
  "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(extractDate(url1));