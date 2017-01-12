/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('select').material_select();
});
$(document).ready(function () {
    $("#buttonsrch").mouseenter(function () {
        $("#srch").show(500);
        $("#advsrch").hide();
    });
    $("#buttonadvsrch").mouseenter(function () {
        $("#advsrch").show(500);
        $("#srch").hide();
    });
});
