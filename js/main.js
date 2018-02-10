$(document).ready(function () {
    // Dropdown Toggle
    $("#heading li.nav-item").hover(function () {
        $(this).find(".dropdown-menu").fadeIn(300);
    }, function () {
        $(this).find(".dropdown-menu").fadeOut(300);
    });

    // Navbar Fixed Toggle
    $(window).scroll(function() {
        if ($(document).scrollTop() > 0) {
          $("#heading .navbar").addClass("fixed");
        } else {
          $("#heading .navbar").removeClass("fixed");
        }
      });
});