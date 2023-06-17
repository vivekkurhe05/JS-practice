// Display the date in h:m:s format

// my solution
function addZero(i) {
    if(i < 10) {
        i = "0" + i
    }

    return i;
}

let d = new Date()
let hrs = addZero(d.getHours());
let mins = addZero(d.getMinutes());
let sec = addZero(d.getSeconds());

if(hrs > 12) {hrs = 24 - hrs; if(hrs < 10) hrs = "0" + hrs}


console.log(`${hrs}:${mins}:${sec}`);