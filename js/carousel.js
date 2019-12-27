$(document).ready(function () {

    $('.service-cards-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }],
        nextArrow: '<button class="btn right-slide-arrow"><i class="fa fa-angle-right fa-1x"></i></button>',
        prevArrow: '<button class="btn left-slide-arrow"><i class="fa fa-angle-left fa-1x"></i></button>',
    });


});
