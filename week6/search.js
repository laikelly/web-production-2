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
    });

    //redirects page
    $('#title').keypress(function(e) {
        if (e.which === 13) {
            window.location = "https://laikelly.github.io/web-production-2/week6/index.html?show_title=" + $('#title').val();
            $('#title').val('')
            return false;
        }
    });
});
