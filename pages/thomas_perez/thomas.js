$(document).ready(function(){
    $("#email").click(function(e){
        e.preventDefault();
        window.open("mailto:thomasperez401@gmail.com");
    });
    $("#profile").hover(function(){
        $(this).attr("src", "young_me.JPG"); 
    }, function(){
        $(this).attr("src", "headshot.jpg");
    });
});