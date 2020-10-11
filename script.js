/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


var i = 0;
var txt = "This is Revanth. Welcome to my website.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("my_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();