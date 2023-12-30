// output: a3b2c4d5

// my solution
function count_words(str) {
    let str1 = ''
    let count_chrs = function (chr) {
        let counter = 0;
        let index = str.indexOf(chr, 0);

        while(index != -1) {
            counter++;
            index = str.indexOf(chr, index+1);
        }

        str1 += chr+counter
    }

    let str_arr = str.split("")
    let new_arr = Array.from(new Set(str_arr));
    
    for(let i=0;i<new_arr.length; i++) {
        count_chrs(new_arr[i])
    }

    return str1
}

console.log(count_words("aaabbccccddddd"));


// or my solution
function count_words2(str) {
    let obj = {}, newstr=""
    for(let i=0; i<str.length; i++) {
        let count = 0
        let index = str.indexOf(str[i])
        while(index != -1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }
    for(let prop in obj) {
        newstr+=prop+obj[prop]
    }
    return newstr
    
}

console.log(count_words2("aaabbccccddddd"));