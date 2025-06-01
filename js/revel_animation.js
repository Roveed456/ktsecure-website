
// Scroll Revel Animation

//hero_animation();

function hero_animation() {

    
var tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".home_bg",   
        scroller: "Body",
        once: true,
    }

});

tl.from(".home_bg", {

    scale: 1.5,
    duration: 0.5,
    delay: 0.1,
})



tl.from(".navlogo, .links li , .bt_cta", {

    y: -30,
    opacity: 0,
    duration: 0.2,
    delay: 0.1,
    stagger: 0.1,
})



tl.from(".hero_content a,.hero_content h1,.hero_content p", {

    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})


}

//service_animation();

function service_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#services",
        scroller: "Body",
        once: true,
       // markers: true,
        start: "top 80%",      
        scrub: 2,
        end: "top 0",
    }

});

tl2.from(".service_heading a,.service_heading h3,.service_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

tl2.from(".service_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}


//about_animation();

function about_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#about",
        scroller: "Body",
        once: true,
       // markers: true,
        start: "top 80%",      
        scrub: 2,
        end: "top 0",
    }

});

tl2.from(".about_heading a,.about_heading h3,.about_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

tl2.from(".about_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}


//testimonials_animation();

function testimonials_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#testimonials",
        scroller: "Body",
        once: true,
       // markers: true,
        start: "top 80%",      
        scrub: 2,
        end: "top 0",
    }

});

tl2.from(".test_heading a,.test_heading h3,.test_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

tl2.from(".test_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}

//specialists_animation();

function specialists_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#specialists",
        scroller: "Body",
       // markers: true,
       once: true,
        start: "top 80%",      
        scrub: 2,
        end: "top 0",
    }

});

tl2.from(".specialists_heading a,.specialists_heading h3,.specialists_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

tl2.from(".specialists_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}

//why_choose_us_animation();

function why_choose_us_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#why",
        scroller: "Body",
       // markers: true,
       once: true,
        start: "top 80%",      
        scrub: 2,
        end: "top 0",
    }

});

tl2.from(".why_main", {
    
    hight : 0,
    y: -20,
    opacity: 0,
    duration: 0.2,   
    scale: 0.4,

})

tl2.from(".why_heading a,.why_heading h3,.why_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})



tl2.from(".why_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}


//blog_animation();

function blog_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#blog",
        scroller: "Body",
       // markers: true,
        start: "top 80%",   
        once: true,   
        scrub: 2,
        end: "top 0",
    }

});


tl2.from(".blog_heading a,.blog_heading h3,.blog_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})



tl2.from(".blog_card li", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})

}


//contact_animation();

function contact_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#contact",
        scroller: "Body",
       // markers: true,
        start: "top 80%",   
        once: true,   
        scrub: 2,
        end: "top 0",
    }

});


tl2.from(".contact_main", {
    
    hight : 0,
    y: -20,
    opacity: 0,
    duration: 0.2,   
    scale: 0.4,

})

tl2.from(".contact_heading a,.contact_heading h3,.contact_heading p", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scale: 0.4,

})



tl2.from(".contact_card input,.contact_card button", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
  

})

}

//footer_animation();

function footer_animation() {


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: "#footer",
        scroller: "Body",
       // markers: true,
        start: "top 80%",   
        once: true,   
        scrub: 2,
        end: "=+100",
    }

});


tl2.from(".footer_main", {
    
  
    y: 120,
    opacity: 0,
    duration: 0.2,   
    //scale: 0.4,

})

}






// Condition on window width to trigger animations
// This ensures animations are only applied on larger screens;

if (window.innerWidth >= 768) {
 
hero_animation();
service_animation();
about_animation();
testimonials_animation();
specialists_animation();
why_choose_us_animation();
blog_animation();
contact_animation();
footer_animation();


}








