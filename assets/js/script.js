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
var topSlider = $('.top-slider');
var bottomSlider = $('.bottom-slider');
var syncing = false;
topSlider.owlCarousel({
    center: true,
    nav:false,
    autoplay: true,
    items: 2,
    slideBy:2,
    margin:20,
     touchDrag: true,
    mouseDrag: true,
    pullDrag: true,
    // animateIn:'fadeIn',
    // animateOut:'fadeOut',
    loop:true,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1,
            nav: false,
            dots:false
        },
        600:{
            items:1,
            nav:false,
            dots:false
        },
        900:{
            items:1,
            nav: false,
            dots:false
        }
        ,1000:{
            items:1,
            nav: false,
            dots:false
        }
        
    }
})
bottomSlider.owlCarousel({
    center: true,
    nav:false,
    autoplay: true,
    items: 2,
    slideBy:2,
    margin:20,
    touchDrag: true,
    mouseDrag: true,
    pullDrag: true,
    // animateIn:'fadeIn',
    // animateOut:'fadeOut',
    loop:true,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1,
            nav: false,
            dots:false
        },
        600:{
            items:1,
            nav:false,
            dots:false
        },
        900:{
            items:1,
            nav: false,
            dots:false
        }
        ,1000:{
            items:1,
            nav: false,
            dots:false
        }
        
    }
})

// DRAG SYNC
topSlider.on('dragged.owl.carousel', function(e){
    if (e.relatedTarget['_drag']['direction'] === 'left') {
        bottomSlider.trigger('next.owl.carousel');
    } else {
        bottomSlider.trigger('prev.owl.carousel');
    }
});

bottomSlider.on('dragged.owl.carousel', function(e){
    if (e.relatedTarget['_drag']['direction'] === 'left') {
        topSlider.trigger('next.owl.carousel');
    } else {
        topSlider.trigger('prev.owl.carousel');
    }
});

// CHANGE SYNC WITH REAL INDEX
topSlider.on('changed.owl.carousel', function(e){
    if (syncing) return;
    syncing = true;

    let index = e.relatedTarget.relative(e.item.index); // 🔥 real index
    bottomSlider.trigger('to.owl.carousel', [index, 1000, true]);
 
  
    syncing = false;
});

bottomSlider.on('changed.owl.carousel', function(e){
    if (syncing) return;
    syncing = true;

    let index = e.relatedTarget.relative(e.item.index); // 🔥 real index
    topSlider.trigger('to.owl.carousel', [index, 1000, true]);

    syncing = false;
});