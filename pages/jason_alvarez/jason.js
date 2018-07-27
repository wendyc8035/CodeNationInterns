/*global $*/

function initMap() {
        var loc = {lat:40.739496, lng: -73.98572000000001};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: loc
        });
        var marker = new google.maps.Marker({
            title:"title",
          position: loc,
          map: map
        });
      }
      initMap()
$(document).ready(function(){
    
    $("#change").hover(function(){
        console.log("hi");
        $("#change").attr("src","https://i.cloudup.com/gBzAn-oW_S-2000x2000.png");
    }, function(){
        $("#change").attr("src","http://www.montblanc.com/content/dam/mtb/products/writing-instruments/108/83/10883/190557-ecom-retina-01.png.adapt.248.248.jpg");
    });
    
    $("#egg").click(function(){
       $("#egg").html("egg"); 
    });
    
    $("#easter").click(function(){
       $("#easter").html("easter"); 
    });
    
});
