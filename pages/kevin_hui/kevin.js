$(document).ready(function(){
  //soundcloud api
SC.initialize({
  client_id: '92929233352ef9e50c2c4e051b0aadf3'
});

// streaming blackpink forever young
SC.stream('/tracks/458705343').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});

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
});