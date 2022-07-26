$(document).ready(function () {
    moveFooter();
    $( window ).resize(function() {
        moveFooter();
    });
});


function moveFooter() {
    let height = $(window).height() - $('#footer').outerHeight(true);
    $('.tm-page').css('min-height', height);
}
