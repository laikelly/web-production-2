//onload function
$(function() {
    $("#get-input").click(function() {
        let showTitle = $("#title").val()
        //if it's a search URL, you could add the text input to it
        $.getJSON(`https://api.tvmaze.com/search/shows?q=${showTitle}`, function(data) {
            for (i = 0; i < data.length; i++) { //goes through the list of results
                // console.log('title: ', data[i].show.name)
                $("#show-details").append('<h1>' + data[i].show.name + '</h1>') //displays the title of the show

                //displays the image of the show
                if (data[i].show.image == null){ //checks for null values
                    let image = $("<img/>", {
                        src: "img/img_not_available.png"
                    })
                    image.appendTo('#show-details')
                }
                else{
                    let image = $("<img/>", {
                        src: data[i].show.image.medium
                    })
                    image.appendTo('#show-details')
                }
                if (data[i].show.language == null) {
                    $("#show-details").append('<ul> Language: N/A </ul>')
                }
                else{
                    $("#show-details").append('<ul> Language: ' + data[i].show.language + '</ul>')
                }
                if (data[i].show.genres.length == 0) {
                    $("#show-details").append('<ul> Genres: N/A </ul>')
                }
                else {
                    $("#show-details").append('<ul> Genres: ' + data[i].show.genres + '</ul>')

                }
                if (data[i].show.rating.average == null) {
                    $("#show-details").append('<ul> Rating: N/A </ul>')
                }
                else{
                    $("#show-details").append('<ul> Rating: ' + data[i].show.rating.average + '</ul>')
                }
                if (data[i].show.ended == null) {
                    $("#show-details").append('<ul> Aired: ' + data[i].show.premiered + ' to N/A' + '</ul>')
                }
                else{
                    $("#show-details").append('<ul> Aired: ' + data[i].show.premiered + ' to ' + data[i].show.ended + '</ul>')
                }

                    $("#show-details").append('<p>' + data[i].show.summary + '</p>')

                let showID = data[i].show.id
                $.getJSON(`https://api.tvmaze.com/shows/${showID}/cast`, function(info) {
                    console.log('cast info:', info)
                })
            }



            console.log('data: ', data)
            //add something to the HTML
            //$("#output").text(data.something.something)
        }).fail(function() {
            //we can add a "fail" function to our AJAX request to do something if it fails
            console.log("that request failed")
        })
        //reset the input
        $('#text-input').val('')

    })
})
