/*global $*/
$(document).ready(function() {

    var searchTerm;
   
    $('#search').click(function(){
        search();
    });

    $('input').keypress(function(e){
        if(e.key === "Enter") {
            search();
        }
    });

    function search(){
        var searchTerm = $("input").val();
        searchTerm = searchTerm.toLowerCase();
        if (searchTerm === ''){
            $(".intern-container").show();
        } else {
            var interContainers = $(".intern-list")

            var searchResult = interContainers.find(`.${searchTerm}`);
    
            $(".intern-container").hide();
            
            searchResult.show()
        }
    }


});