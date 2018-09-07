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

}

$(document).ready(main);
