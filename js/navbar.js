/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#buttonsrch").mouseenter(function () {
        $("#search ul").toggle(500);
        $("#advsearch ul").hide();
    });
    $("#buttonadvsrch").mouseenter(function () {
        $("#advsearch ul").toggle(500);
        $("#search ul").hide();
    });
});

$(document).mouseup(function (e)
{
    var container = $("nav");

    if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#advsearch ul').hide(500);
        $('#search ul').hide(500);
    }
});
$(document).on('keydown', function (e) {
    if (e.keyCode === 27)// ESC
    {
        $("#advsearch ul").hide(500);
        $("#search ul").hide(500);
    }
});