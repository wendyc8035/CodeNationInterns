
$( document ).ready(function() {
    

 $("#profile").click(function(){ 
  $("#profile").attr('src',"https://media.glassdoor.com/sqll/1123552/makespace-squarelogo-1461781516003.png");
  return false;
 });
 
 $("#profile").click(function(){ 
    $("#background").css({"background-image":"none"});
    $(".img").css({"background-image": "none", "background-color": "#153916" });
    $("#fkj").css("color", "white");
    $(".section-heading").css({"color": "#153916", "text-shadow":"none", });
    $("body").css({"font-family": "'Open Sans', sans-serif",});
    $("p").css({"color":"#1f4220"});
    $("#spacelink").css({"color":"#153916"});
    // $(".gray").css({"background-color":"#f3f2f3"});
 });
 
 $("#name").click(function(){ 
   $("#profile").attr('src',"https://i.imgur.com/H5skdtI.gif");
   $(".img").css({ "background-color": "none","background-image": "url(https://cdn.dribbble.com/users/55063/screenshots/2266143/9_squares_dot.gif)" });
   $("nav").css({ "opacity": "0.8","background-image": "url(https://cdn.dribbble.com/users/55063/screenshots/2266143/9_squares_dot.gif)" });
   $("#fkj").css("color", "white");
   $(".footer").css({"background-image": "url(https://cdn.dribbble.com/users/55063/screenshots/2266143/9_squares_dot.gif)", "color":"white" });
   $("#internloc").css("color", "white");
   $(".section-heading").css({"color": "black", "text-shadow":"1px 1px gray", });
   $("body").css({"font-family": "'Open Sans', sans-serif",});
   $("p").css({"color":"black"});
   $("#spacelink").css({"color":"white"});
   $("#name").css({"color":"white"});
   $(".add").css({"color":"white"});
   
    // $(".gray").css({"background-color":"#f3f2f3"});
 });
 


 
});

