$(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
        $("header").addClass("animate");
    } else {
        $("header").removeClass("animate");
    }
});
