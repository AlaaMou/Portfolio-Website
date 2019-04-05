$(document).ready(function(){

// hover animation for contact link
$('#together').hover(function(){
    $(this).html('Let\'s work together >>');
     $(this).animate({letterSpacing: ".1rem", opacity: "1" });
}, function(){
    $(this).html("Let's work together <<");
    $(this).animate({letterSpacing: ".01rem", opacity: "0.8"});
})    

// Typewriter effect

var i = 0;
var txt = 'My Journey Of Coding ...';
var speed = 150;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();

})
