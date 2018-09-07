/*jslint browser: true*/
/*global $, jQuery, alert*/

function main() {
    "use strict";
    var hotbod = document.querySelector("body");

    function doStuff() {
        hotbod.className += " animate";
    }

    window.onload = function () {
        doStuff();
    };

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });

}

$(document).ready(main);
