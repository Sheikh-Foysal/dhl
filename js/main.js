


// Function Activation
$(document).ready(function(){

    new WOW().init();
    FixedHeaderFunction();
    GalleryFunction();
    HeroSliderOwlCarouselFunction();
    ScrollTopFunction();
    FeaturesSliderOwlCarouselFunction();
    PartnerSliderOwlCarouselFunction();
    SlickMobileMenuFunction();

});


// Header Sticky Function
function FixedHeaderFunction(){
    $(window).scroll(function() {  
        var scroll = $(window).scrollTop();
        if (scroll >= 30) {
            $(".header_nav").addClass("fixedheader shadow");
        } else {
            $(".header_nav").removeClass("fixedheader shadow");
        }
    });
}

/*================================
    Smooth Scroll
==================================*/
function ScrollTopFunction(){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $("#scroll").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
}

// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function HeroSliderOwlCarouselFunction(){
    $('#hero_slider').owlCarousel({
        loop:true,
        margin:false,
        nav:false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1
    });
}




// Owl Carousel Function
function FeaturesSliderOwlCarouselFunction(){
    $('#features_services_slider').owlCarousel({
        loop:true,
        margin:false,
        nav:false,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
    });
}





// Owl Carousel Function
function PartnerSliderOwlCarouselFunction(){
    $('#partner_slider').owlCarousel({
        loop:true,
        margin:false,
        nav:false,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        },
    });
}

// Slick Mobile Menu Function
function SlickMobileMenuFunction(){
    $('#menu').slicknav({
        label: 'Menu',
        duration: 500,
        prependTo:'#demo'
    });
}
