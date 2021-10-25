$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        let searchText = $('#searchText').val();
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
                      <div id="showInfo" class="well text-center">
                        <img src="img/img_not_available.png">
                        <h5>${show.name}</h5>
                        <a onclick="showSelected('${show.id}')" class="btn btn-primary" href="show.html">Show Details</a>
                      </div>
                    </div>`)
                } else {
                    $('#shows').append(`<div class="col-md-3">
                      <div id="showInfo" class="well text-center">
                        <img src="${show.image.medium}">
                        <h5>${show.name}</h5>
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

function showSelected(id) {
    console.log(id)
    sessionStorage.setItem('showId', id);
    window.location = 'show.html';
    return false;
}

function getShow() {
    let showId = sessionStorage.getItem('showId');
    $.getJSON(`https://api.tvmaze.com/shows/${showId}`, function(data) {
            console.log('data: ', data)
            let show = data
            if (show.image == null) { //checks for null values
                $('#show').append(`<div class="row">
                      <div class="col-md-4">
                        <img src="img/img_not_available.png" class="thumbnail">
                      </div>
                      <div class="col-md-8">
                        <h2>${show.name}</h2>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Language:</strong> ${show.language}</li>
                          <li class="list-group-item"><strong>Genre:</strong> ${show.genres}</li>
                          <li class="list-group-item"><strong>Rated:</strong> ${show.rating.average}</li>
                          <li class="list-group-item"><strong>Released:</strong> ${show.premiered} to ${show.ended}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="well">
                        <h3>Summary</h3>
                        ${show.summary}
                        <hr>
                        <a href="http://imdb.com/title/${show.externals.imdb}" target="_blank" class="btn btn-primary">View IMDB</a>
                        <a href="index.html" class="btn btn-default">Go Back To Search</a>
                      </div>
                    </div>`)
            } else {
                $('#show').append(`<div class="row">
                      <div class="col-md-4">
                        <img src="${show.image.medium}" class="thumbnail">
                      </div>
                      <div class="col-md-8">
                        <h2>${show.name}</h2>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Language:</strong> ${show.language}</li>
                          <li class="list-group-item"><strong>Genre:</strong> ${show.genres}</li>
                          <li class="list-group-item"><strong>Rated:</strong> ${show.rating.average}</li>
                          <li class="list-group-item"><strong>Released:</strong> ${show.premiered} to ${show.ended}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="well">
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
