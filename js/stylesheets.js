$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('.materialboxed').materialbox();
    $('select').material_select();
});

function initMap() {
    var mapDiv = document.getElementById('map');
    var myLatLng = {lat: 16.3146400, lng: 80.4287960};
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'BM broadband'
    });
}

$(function () { /* to make sure the script runs after page load */
    $('.item').each(function (event) { /* select all divs with the item class */
        var max_length = 330; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                    '<a href="#" class="read_more">... Read More</a>' +
                    '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */
            $(this).find('a.read_more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
            });
        }
    });
});
$(function () { /* to make sure the script runs after page load */
    $('.largeitem').each(function (event) { /* select all divs with the item class */
        var max_length = 510; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                    '<a href="#" class="read_more">... Read More</a>' +
                    '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */
            $(this).find('a.read_more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.largeitem').find('.more_text').show(); /* show the .more_text span */
            });
        }
    });
});
$(function () { 
    $('.schooldata').each(function (event) { /* select all divs with the item class */
        var max_length = 180; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                    '<a href="#" class="read_more">More</a>'); 
        }
    });
});