$(document).ready(function(){
    $("#email").click(function(e){
        e.preventDefault();
        window.open("mailto:thomasperez401@gmail.com");
    });
    $("#profile").hover(function(){
        $(this).attr("src", "thisimagsavedme.jpg"); 
    }, function(){
        $(this).attr("src", "thomas.JPG");
    });
});