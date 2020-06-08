const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 85
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.gambar').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

});

var lebar = $(window).width();
if (lebar > 992) {
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 550,
        transition: 600,
        interval: 3000
    });

    $('.kolom').css({
        'margin-top': '140px'
    });

    $('.gambar').css({
        'width': '250px'
    });

    $('nav').css({
        'height': '110px'
    });

    $('.logo').css({
        'width': '85px',
        'margin-top': '13px'
    });

    $('.icon').css({
        'margin-top': '24px'
    });

    $('.caption h3').css({
        'font-size': '43px'
    });

    $('.caption h5').css({
        'font-size': '24px'
    });

    $('h4').css({
        'font-size': '34px'
    });

} else if (lebar < 992) {
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 350,
        transition: 600,
        interval: 3000
    });

    $('.kolom').css({
        'margin-top': '76px'
    });

    $('.gambar').css({
        'width': '155px'
    });

    $('.parallax-container').css({
        'height': '280px'
    });

    $('.icon').css({
        'margin-top': '12px'
    });

    $('nav').css({
        'height': '80px'
    });

    $('.logo').css({
        'width': '65px',
        'margin-top': '7.5px'
    });

    $('.caption h3').css({
        'font-size': '38px'
    });

    $('.caption h5').css({
        'font-size': '19px'
    });

    $('h4').css({
        'font-size': '31px'
    });
}