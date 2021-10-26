$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        let searchText = $('#searchText').val();
        $('#shows').empty()
        getShows(searchText);
        e.preventDefault();

    });
});

function getShows(searchText) {
    $.getJSON(`https://api.tvmaze.com/search/shows?q=${searchText}`, function(data) {
            console.log('data: ', data)
            for (let i = 0; i < data.length; i++) {
                // add some show data
                let show = data[i].show
                if (data[i].show.image == null) { //checks for null values
                    $('#shows').append(`<div class="col-md-3">
                      <div id="showInfo" class="card border-primary mb-4 text-center">
                      <h5 class="card-header">${show.name}</h5>
                        <img src="img/img_not_available.png">
                        <a onclick="showSelected('${show.id}')" class="btn btn-primary" href="show.html">Show Details</a>
                      </div>
                    </div>`)
                } else {
                    $('#shows').append(`<div class="col-md-3">
                      <div id="showInfo" class="card border-primary mb-4 text-center">
                      <h5 class="card-header">${show.name}</h5>
                        <img src="${show.image.medium}">
                        <a onclick="showSelected('${show.id}')" class="btn btn-primary" href="show.html">Show Details</a>
                      </div>
                    </div>`)
                }
            }
        })

        .fail(function() {
            console.log("that request failed")
        })
}

// <div class="card border-primary mb-3" style="max-width: 20rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h4 class="card-title">Primary card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>

function showSelected(id) { //grabs show's id and present info on seperate page
    console.log(id)
    sessionStorage.setItem('showId', id);
    window.location = 'show.html';
    return false;
}

function replaceNull(myObject) { //replaces null values with N/A
    Object.keys(myObject).map(function(key, index) {
        if (myObject[key] == null) {
            myObject[key] = "N/A";
        }
    });
}

function getShow() {
    let showId = sessionStorage.getItem('showId');
    $.getJSON(`https://api.tvmaze.com/shows/${showId}`, function(data) {
            console.log('data: ', data)
            let show = data
            if (show.image == null) { //checks for null values
                replaceNull(show)
                $('#show').append(`<div class="row">
                      <div class="col-sm-4 text-center">
                        <h2>${show.name}</h2>
                        <img src="img/img_not_available.png" class="thumbnail">
                      </div>
                      <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Language:</strong> ${show.language}</li>
                          <li class="list-group-item"><strong>Genre:</strong> ${show.genres}</li>
                          <li class="list-group-item"><strong>Rated:</strong> ${show.rating.average}</li>
                          <li class="list-group-item"><strong>Released:</strong> ${show.premiered} to ${show.ended}</li>
                        </ul>
                        <br>
                        <h3>Summary</h3>
                        ${show.summary}
                        <hr>
                        <a href="http://imdb.com/title/${show.externals.imdb}" target="_blank" class="btn btn-primary">View IMDB</a>
                        <a href="index.html" class="btn btn-default">Go Back To Search</a>
                      </div>
                    </div>`)
            } else {
                replaceNull(show)
                $('#show').append(`<div class="row">
                      <div class="col-sm-4 text-center">
                        <h2>${show.name}</h2>
                        <img src="${show.image.medium}" class="thumbnail">
                      </div>
                      <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Language:</strong> ${show.language}</li>
                          <li class="list-group-item"><strong>Genre:</strong> ${show.genres}</li>
                          <li class="list-group-item"><strong>Rated:</strong> ${show.rating.average}</li>
                          <li class="list-group-item"><strong>Released:</strong> ${show.premiered} to ${show.ended}</li>
                        </ul>
                        <br>
                        <h3>Summary</h3>
                        ${show.summary}
                        <hr>
                        <a href="http://imdb.com/title/${show.externals.imdb}" target="_blank" class="btn btn-primary">View IMDB</a>
                        <a href="index.html" class="btn btn-default">Go Back To Search</a>
                      </div>
                    </div>`)
            }

        })
        .fail(function() {
            console.log("that request failed")
        })
}
