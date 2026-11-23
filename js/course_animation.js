// Custom cursor follower (only active when a #cursor element exists in the page)

var main = document.querySelector("#home");
var cursor = document.querySelector("#cursor");

if (main && cursor) {
    main.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.6,
        });
    });
}
