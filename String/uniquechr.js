// my solution

function unique_chars(str) {
    let newstr=""
    for(let i=0;i<str.length;i++) {
        if(!newstr.includes(str[i])) {
            newstr+=str[i]
        }
    }
    return newstr
}

console.log(unique_chars("abcdabc"));