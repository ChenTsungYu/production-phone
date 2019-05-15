// Show and hide menu
$(document).ready(function () {
    'use strict'; // 嚴格模式
    $(window).scroll(function () {
        'use strict'; // 嚴格模式

        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin': '-100px', 'opacity': '0'
            })
        } else {
            $('.navbar').css({
                'margin': '0px', 'opacity': '1'
            })
        }
    });
});

// highlight menu item on scroll
$(document).ready(function () {
    'use strict'; 

    $('.navbar-nav li a').on('click', function () {
        'use strict';
        $('.navbar-nav li a').parent().removeClass('active');

        $(this).parent().addClass('active');
    })
});
// add auto padding to header 
$(document).ready(function () {
    'use strict';
    setInterval(function () {
        'use strict';
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        $(".header-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});
//add smooth scrolling
$(document).ready(function () {
    var scroll = new SmoothScroll('a[href*="#section-"]');
});

// Add bx slider to screens
$(document).ready(function () {
    $('.bxslider').bxSlider({
        slideWidth: 280.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });
});
// Add counter---> it does't work
$(document).ready(function () {
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});
// Add animation/ Initialize Woo
$(document).ready(function () {
    'use strict';
    new WOW().init();
});