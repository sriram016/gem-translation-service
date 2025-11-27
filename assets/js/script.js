$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        nav:false,
        slideBy:1,
        autoplay: true,
        items: 3,
        margin:10,
        // animateIn:'fadeIn',
        // animateOut:'fadeOut',
        loop:true,
        responsive:{
            0:{
                items:1,
                nav: true,
                navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
                dots:false
            },
            600:{
                items:1,
                nav:true,
                navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
                dots:false
            },
            900:{
                items:1,
                nav: true,
                navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
                dots:false
            }
            
        }
    })
});

$(".testi1").owlCarousel({
    center: true,
    nav:false,
    slideBy:1,
    autoplay: true,
    items: 3,
    margin:20,
    // animateIn:'fadeIn',
    // animateOut:'fadeOut',
    loop:true,
    responsive:{
        0:{
            items:1,
            nav: false,
            dots:false
        },
        600:{
            items:2,
            nav:false,
            dots:false
        },
        900:{
            items:1,
            nav: false,
            dots:false
        }
        ,1000:{
            items:3,
            nav: false,
            dots:false
        }
        
    }
})
