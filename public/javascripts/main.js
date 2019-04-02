$(document).ready(function(){

$('#together').hover(function(){
    $(this).html('Let\'s work together >>');
     $(this).animate({letterSpacing: ".1rem",opacity: "1" });
}, function(){
    $(this).html("Let's work together <<");
    $(this).animate({letterSpacing: ".01rem", opacity: "0.8"});
})    


    
})
