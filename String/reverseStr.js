
let str = "Vivek"

let length = 0

while(str[length]!=undefined) {
    length++
}

for(let i=0,j=length-1;i<j;i++,j--) {
    let temp = str[i]
    str[i] = str[j]
    str[j] = temp
}
console.log(str)