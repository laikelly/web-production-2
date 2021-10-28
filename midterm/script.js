$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        let searchText = $('#searchText').val();
        $('#shows').empty()
        $('#scroll_section').empty()
        getShows(searchText);
        $('#scroll_section').append(`<a href="#shows_page"><span></span>see results</a>`)
        e.preventDefault();

    });
});

function getShows(searchText) {
    $.getJSON(`https://api.tvmaze.com/search/shows?q=${searchText}`, function(data) {
            console.log('data: ', data)
            if (data.length == 0){
                $('#shows').append(`<div class="alert alert-dismissible alert-primary">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    This show is currently unavailable, please try again.
                </div>`)
            }
            for (let i = 0; i < data.length; i++) {
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
                $('#show_name').append(`${show.name}`)
                $('#show').append(`<img src="img/img_not_available.png" class="thumbnail">`)
                $('#language').append(`${show.language}`)
                $('#genres').append(`${show.genres}`)
                if (show.rating.average == null) {
                    $('#rating').append(`N/A`)
                }
                else{
                    $('#rating').append(`${show.rating.average}`)
                }
                $('#release_date').append(`${show.premiered} to ${show.ended} `)
                $('#summary').append(` ${show.summary} `)
            } else {
                replaceNull(show)
                $('#show_name').append(`${show.name}`)
                $('#show').append(`<img src="${show.image.medium}" class="thumbnail">`)
                $('#language').append(`${show.language}`)
                $('#genres').append(`${show.genres}`)
                if (show.rating.average == null) {
                    $('#rating').append(`N/A`)
                }
                else{
                    $('#rating').append(`${show.rating.average}`)
                }
                $('#release_date').append(`${show.premiered} to ${show.ended} `)
                $('#summary').append(` ${show.summary} `)
            }

        })
        .fail(function() {
            console.log("that request failed")
        })
}

function getCasts() {
    let showId = sessionStorage.getItem('showId');
    $.getJSON(`https://api.tvmaze.com/shows/${showId}/cast`, function(data) {
            console.log('casts: ', data)
            for (let actor of data) {
                $('#casts').append(`<div class="col-auto" id="cast_profile">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <div class="circular--portrait">
                    <img src="${actor.person.image.medium}" />
                    </div>
                    <br>
                        <h6 class="mb-0" id="actor_name">${actor.person.name}</h6><h7 id="role_name">as ${actor.character.name}</h7>
                    </div>
                </div>`)
            }
        })
        .fail(function() {
            console.log("that request failed")
        })
}
