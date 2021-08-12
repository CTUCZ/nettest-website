$(document).ready(function () {

    var vyska = $(window).height() - $('#footer').outerHeight(true);
    $('.tm-page').css('min-height', vyska);
});