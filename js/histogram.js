/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


!function () {
    var h = document.querySelector('.rating-details-histogram');

    // setTimeout 0 is required to yeild so that the animation happens.  Maybe it's just better to use a CSS animation instead.
    window.setTimeout(function () {
        h.classList.remove('collapsed');
    }, 0);

}();