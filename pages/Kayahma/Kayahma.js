var projects = firebase.database().ref('projects');
projects.on('value', function(snapshot) {
    $(".gallery").empty();
    var projects = snapshot.val();

    for (var key in projects) {
        var div = $('<div class="col-sn-4 portfolio-item">');
        var thumbnail = $('<div class="thumbnail">');
        var title = $('<h4 class="text-center" id="project1-title">');
        title.text(projects[project1].title);
        var img = $('<img src="" class="img-responsive">');
        img.attr("src", projects[project1].project_image_url);
        var caption = $('<div class="caption text-center">');
        var livesiteButton= $('<a class="btn btn-outline"href="">');
        livesiteButton.attr("href", projects[key].live_site_url);
        livesiteButton.text("Live Site");
        var sourceButton = $('<a class= "btn btn-outline" href=""> Source </a>');
        sourceButton.attr("href", projects[key].source_url);
        
        caption.append(livesiteButton);
        caption.append(sorceButton);
        thumbnail.append(caption);
        thumbnail.append(title);
        thumbnail.append(img);
        div.append(thumbnail);
        
      

    }
});