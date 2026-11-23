// Scroll reveal animations (GSAP + ScrollTrigger)

gsap.registerPlugin(ScrollTrigger);

{
    var heroTl = hero_animation();
    loader_animation(heroTl);

    // [section trigger, [[selector, from-vars], ...]]
    var sections = [
        ["#services", [[".service_heading > a, .service_heading h3, .service_heading p", { y: 50 }],
                       [".service_card > li", { y: 80, scale: 0.85 }]]],
        ["#about", [[".about_heading a, .about_heading h3", { y: 50 }],
                    [".about_card > li", { x: -60 }]]],
        ["#testimonials", [[".test_heading a, .test_heading h3, .test_heading p", { y: 50 }],
                           [".test_card > li", { y: 80, scale: 0.9 }]]],
        ["#specialists", [[".specialists_heading", { x: -60 }],
                          [".specialists_card > li", { y: 60, scale: 0.9 }]]],
        ["#why", [[".why_main", { y: 80, scale: 0.92 }],
                  [".why_heading a, .why_heading h3", { y: 40 }],
                  [".why_card > li", { y: 50, scale: 0.85 }]]],
        ["#blog", [[".blog_heading", { x: -60 }],
                   [".blog_card > li", { y: 80, scale: 0.9 }]]],
        ["#contact", [[".contact_main", { y: 80, scale: 0.92 }],
                      [".contact_heading > *", { y: 30 }],
                      [".contact_card input, .contact_card button", { y: 30, scale: 0.9 }]]],
        ["#footer", [[".footer_main", { y: 80 }]]],
    ];

    sections.forEach(function (s) {
        section_animation(s[0], s[1]);
    });

    counter_animation();
    parallax_animation();
}

function hero_animation() {

    var tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    tl.from(".home_bg", { scale: 1.25, opacity: 0, duration: 1.6 })
        .from(".navlogo, .links li, .bt_cta", {
            y: -30,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.08,
        }, "-=1.1")
        .from(".hero_content > a, .hero_content > p", {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.12,
        }, "-=0.6")
        .from(".hero_content h1", {
            y: 50,
            scale: 0.9,
            autoAlpha: 0,
            duration: 1,
            ease: "back.out(1.4)",
        }, "-=0.9")
        .from(".hero_content > div", {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.15,
        }, "-=0.5");

    return tl;
}

function section_animation(trigger, groups) {

    var tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
            once: true,
        },
    });

    groups.forEach(function (g, i) {
        tl.from(g[0], Object.assign({
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.15,
        }, g[1]), i === 0 ? 0 : "-=0.5");
    });
}

// Count the "15+" years stat up from 0
function counter_animation() {

    document.querySelectorAll(".counter").forEach(function (el) {
        var obj = { v: 0 };
        gsap.to(obj, {
            v: parseInt(el.dataset.target, 10),
            duration: 2,
            ease: "power1.out",
            onUpdate: function () { el.textContent = Math.round(obj.v); },
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
    });
}

// Gentle scroll parallax on hero background and glow blobs
function parallax_animation() {

    gsap.to(".home_bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
    });
}

// Page loader: fills a progress bar, then slides away and starts the hero intro
function loader_animation(heroTl) {

    var loader = document.querySelector("#loader");
    if (!loader) { heroTl.play(); return; }

    var done = false;
    var bar = { v: 0 };

    var fill = gsap.to(bar, {
        v: 90,
        duration: 2.5,
        ease: "power1.out",
        onUpdate: function () { setProgress(bar.v); },
    });

    function setProgress(v) {
        gsap.set("#loader-bar", { scaleX: v / 100 });
        document.querySelector("#loader-count").textContent = Math.round(v) + "%";
    }

    function finish() {
        if (done) return;
        done = true;
        fill.kill();
        gsap.to(bar, {
            v: 100,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: function () { setProgress(bar.v); },
            onComplete: function () {
                gsap.timeline()
                    .to("#loader-content", { y: -30, autoAlpha: 0, duration: 0.5, ease: "power2.in" })
                    .to(loader, {
                        yPercent: -100,
                        duration: 0.9,
                        ease: "power4.inOut",
                        onComplete: function () {
                            loader.remove();
                            document.body.classList.remove("overflow-hidden");
                            ScrollTrigger.refresh();
                        },
                    }, "-=0.1")
                    .add(function () { heroTl.play(); }, "-=0.5");
            },
        });
    }

    // wait for all assets (min 1.2s so the loader is actually seen), with a 6s safety net
    var minTime = new Promise(function (r) { setTimeout(r, 1200); });
    var loaded = new Promise(function (r) {
        if (document.readyState === "complete") r();
        else window.addEventListener("load", r);
    });
    Promise.all([minTime, loaded]).then(finish);
    setTimeout(finish, 6000);
}
