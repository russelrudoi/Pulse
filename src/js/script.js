$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/arrow-left.png" alt="prev" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/arrow-right.png" alt="next" /></button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                    speed: 900
                }
            },

            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    speed: 900
                }
            }
        ]
    });
});