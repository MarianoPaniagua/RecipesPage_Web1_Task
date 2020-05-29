//menu

$('#check').click(function() {
    $('.menu').toggleClass("moveMenu");
});

$('.nav-li').hover(function() {
    $(this).toggleClass("active");
});