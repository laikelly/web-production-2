//search page js
$(document).ready(function() {

    $('.search').each(function() {
        var self = $(this);
        var div = self.children('div');
        var placeholder = div.children('input').attr('placeholder');
        var placeholderArr = placeholder.split(/ +/);
        if (placeholderArr.length) {
            var spans = $('<div />');
            $.each(placeholderArr, function(index, value) {
                spans.append($('<span />').html(value + '&nbsp;'));
            });
            div.append(spans);
        }
        self.click(function() {
            self.addClass('open');
            setTimeout(function() {
                self.find('input').focus();
            }, 750);
        });

        $(document).click(function(e) {
            if (!$(e.target).is(self) && !jQuery.contains(self[0], e.target)) {
                self.removeClass('open');
            }
        });
        //redirects page
        self.keypress(function(e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code.toString() == 13) {
                QLSearch(); // call the function to redirect to another page
                return false;
            }

        });
        // Function that redirect the user to another page
        function QLSearch() {
            window.location = "file:///Users/kellylai/Documents/MEDP331/web-production-2/week6/index.html";
        }
    });

});

//api js
$(function() {
        let showTitle = $('#title').val();
        if (showTitle != '') {
                getShow(showTitle)
              }
              //reset the input
            // $('#title').val('')


    function getShow(showTitle){
        $.getJSON(`https://api.tvmaze.com/search/shows?q=${showTitle}`, function(data) {
            for (i = 0; i < data.length; i++) { //goes through the list of results
                // console.log('title: ', data[i].show.name)
                $("#show-details").append('<h1>' + data[i].show.name + '</h1>') //displays the title of the show

                //displays the image of the show
                if (data[i].show.image == null) { //checks for null values
                    let image = $("<img/>", {
                        src: "img/img_not_available.png"
                    })
                    image.appendTo('#show-details')
                } else {
                    let image = $("<img/>", {
                        src: data[i].show.image.medium
                    })
                    image.appendTo('#show-details')
                }
                if (data[i].show.language == null) {
                    $("#show-details").append('<ul> Language: N/A </ul>')
                } else {
                    $("#show-details").append('<ul> Language: ' + data[i].show.language + '</ul>')
                }
                if (data[i].show.genres.length == 0) {
                    $("#show-details").append('<ul> Genres: N/A </ul>')
                } else {
                    $("#show-details").append('<ul> Genres: ' + data[i].show.genres + '</ul>')

                }
                if (data[i].show.rating.average == null) {
                    $("#show-details").append('<ul> Rating: N/A </ul>')
                } else {
                    $("#show-details").append('<ul> Rating: ' + data[i].show.rating.average + '</ul>')
                }
                if (data[i].show.ended == null) {
                    $("#show-details").append('<ul> Aired: ' + data[i].show.premiered + ' to N/A' + '</ul>')
                } else {
                    $("#show-details").append('<ul> Aired: ' + data[i].show.premiered + ' to ' + data[i].show.ended + '</ul>')
                }
                if (data[i].show.summary == null) {
                    $("#show-details").append('<p> Summary Unavailable </p>')
                } else {
                    $("#show-details").append('<p>' + data[i].show.summary + '</p>')
                }
            }
            console.log('data: ', data)
        }).fail(function() {
            //we can add a "fail" function to our AJAX request to do something if it fails
            console.log("that request failed")
        })

    }
})
