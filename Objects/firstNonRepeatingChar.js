function firstNonRepeatingChar(str) {
    let firstNonRepeatingChar = '';
    for(let i=0;i<str.length;i++) {
        let firstIndex = str.indexOf(str[i]);
        let lastIndex = str.lastIndexOf(str[i]);

        if(firstIndex === lastIndex) {
            firstNonRepeatingChar = str[i]
            break;
        }
        else
            firstNonRepeatingChar = null;
    }

    return firstNonRepeatingChar;
}

console.log(firstNonRepeatingChar("aabbcc")) // should return null
console.log(firstNonRepeatingChar("aabbcde")) // should return c