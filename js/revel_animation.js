
// Scroll Revel Animation

//hero_animation();

function hero_animation() {

    
var tl = gsap.timeline({

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



if (window.innerWidth >= 768) {
 
hero_animation();
service_animation();
about_animation();
testimonials_animation();
specialists_animation();


}








