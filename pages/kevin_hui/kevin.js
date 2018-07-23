//soundcloud api
// SC.initialize({
//   client_id: '92929233352ef9e50c2c4e051b0aadf3'
// });

// // streaming blackpink forever young
// SC.stream('/tracks/458705343').then(function(player){
//   player.play().then(function(){
//     console.log('Playback started!');
//   }).catch(function(e){
//     console.error('Playback rejected. Try calling play() from a user interaction.', e);
//   });
// });

$(document).ready(function(){
  $("#proPic").click(function(){
    $("#proPic").attr( "src" , "snap.jpg" );
    console.log("hi");
  });
  $("#proPic").mouseover(function(){
    $("#proPic").attr( "src" , "kevin.jpg" );
    console.log("bye bye");
  });
  $("#proPic").mouseout(function(){
    $("#proPic").attr( "src" , "stockPic.jpg" );
    console.log("bye bye");
  });
  
//("#proPic").onmouseover = function() {mouseOver()};
// document.getElementById("proPic").onmouseout = function() {mouseOut()};
// console.log("hi");

// function mouseOver(){
// document.getElementById("proPic").src = "kevin.jpg";
//     //<img class="rounded-circle profile-img" src="kevin.jpg" alt="">
// }
// function mouseOut(){
//     document.getElementById('proPic').innerHTML = "src ='stockPic.jpg'";
// }
});