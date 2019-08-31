


// Function Activation
$(document).ready(function(){

    new WOW().init();
    GalleryFunction();
    HeroSliderOwlCarouselFunction();
    FeaturesSliderOwlCarouselFunction();
    PartnerSliderOwlCarouselFunction();
    SlickMobileMenuFunction();

});



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
