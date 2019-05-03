/*global $*/
$(document).ready(function() {

    displayInterns(interns); // interns are inmported from interns.js

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
        var internList = [];

        if (searchTerm === ''){
            displayInterns(interns);
        } else {
            internList = interns.filter(function(intern){
                for(key in intern) {
                    if (intern[key].toString().toLowerCase().includes(searchTerm)){
                        return true;
                    }
                }
            });
            displayInterns(internList);
        }
    }



    function displayInterns(internList){
        $(".intern-list").empty();

        internList.forEach(function(intern) {
            var internDisplay =
            `<div class="col-md-3 intern-container">\
              <a href="pages/${intern.folderName}/${intern.fileName}">\
                <div class="intern img-thumbnail">\
                  <img class="rounded-circle img-fluid" src="pages/${intern.folderName}/${intern.imgName}" alt="">\
                  <h5>${intern.firstName} ${intern.lastName}</h5>\
                  <p class="text-muted">Intern at ${intern.company}</p>\
                </div>\
              </a>\
            </div>`

             $(".intern-list").append(internDisplay);
        });
    }

});