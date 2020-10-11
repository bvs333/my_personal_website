/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


var i = 0;
//var txt = 'Lorem ipsum typing effect!'; /* The text */
var txt = ' I\'m a Nature lover , explorer and a coding enthusiast. I also like travelling to new places .In my free time I watch TV series .'
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("moving").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}