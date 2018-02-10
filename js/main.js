$(document).ready(function () {
    // Dropdown Toggle
    $("#heading li.nav-item").hover(function () {
        $(this).find(".dropdown-menu").fadeIn(300);
    }, function () {
        $(this).find(".dropdown-menu").fadeOut(300);
    });


});