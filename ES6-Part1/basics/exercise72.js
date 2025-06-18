/**
 * Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.
 */

// w3resource sol
function detectDeviceType() {
    const re = /Android|iPhone|iPad|BlackBerry|IEMobile|Opera Mini|iPod|webOS/gi;
    return re.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
}

console.log(detectDeviceType());