// Display the date in h:m:s:ms format

// my solution
function addZero(i, n) {
    while(i.toString().length < n) {
        i = "0" + i
    }

    return i;
}

let d = new Date()
let hrs = addZero(d.getHours(), 2);
let mins = addZero(d.getMinutes(), 2);
let sec = addZero(d.getSeconds(), 2);
let ms = addZero(d.getMilliseconds(), 3);

if(hrs > 12) {hrs = 24 - hrs; if(hrs < 10) hrs = "0" + hrs}


console.log(`${hrs}:${mins}:${sec}:${ms}`);