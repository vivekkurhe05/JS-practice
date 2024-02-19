/**
 * Write a Python program to split a list based on the first character of a word.
 * Sample Input:
word_list = ['be','have','do','say','get','make','go','know','take','see','come','think',
     'look','want','give','use','find','tell','ask','work','seem','feel','leave','call']
 */

// my solution
function split_list(arr) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<alpha.length; i++) {
        
        arr.forEach(el => {
            if(el.startsWith(alpha[i])){
                console.log(alpha[i])
                console.log(el)
            }
        })
    }
}

let word_list = ['be','have','do','say','get','make','go','know','take','see','come','think',
'look','want','give','use','find','tell','ask','work','seem','feel','leave','call']

split_list(word_list)