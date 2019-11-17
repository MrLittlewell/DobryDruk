new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    scrollHorizontally: false,
    loopHorizontal: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fadingEffect: true,
    anchors: ['1st', '2nd', '3th', '4th'],
    // parallax: true,
    onLeave: function(origin, destination, direction) {
        console.log("Leaving section" + origin.index);
    },
    afterLoad: function(origin) {
        var loadedSection = this;
        //использование ссылки с привязкой
        if (origin.anchor == '2nd') {

        }
    },
    afterSlideLoad: function(section, origin, destination, direction) {
        var loadedSlide = this;
        if (section.anchor == '2nd' && destination.index == 0) {

        }
        //первый слайд второго раздела
        if (section.anchor == '2nd' && destination.index == 1) {

        }

        //второй слайд второго раздела (supposing #secondSlide is the
        //привязка для второго раздела
        if (section.anchor == '2nd' && destination.index == 2) {

        }
    }
});



function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
animateCSS('.main-title img', 'fadeIn');
$('.main-title p').addClass('delay-1s')
animateCSS('.main-title p', 'fadeIn');

new WOW().init();

$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({ fullWidth: true });
$('.materialboxed').materialbox();
$('#modal-hard-one').modal();
$('#modal-hard-two').modal();
$('#modal-hard-three').modal();
$('#modal-soft-one').modal();
$('#modal-soft-two').modal();
$('#order').modal();