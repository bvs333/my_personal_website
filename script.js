/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


function blink_text() {
    $('.blink').fadeOut(50);
    $('.blink').fadeIn(50);
}
setInterval(blink_text, 500);
