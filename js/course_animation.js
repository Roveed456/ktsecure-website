var main = document.querySelector("#home")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function (dets) {

console.log(dets);

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,

    })

})

// imageDiv.addEventListener("mouseenter", function () {
//     cursor.innerHTML = "View More"
//     gsap.to(cursor, {
//         scale: 4,
//         backgroundColor: "#ffffff8a"
//     })
// })

// imageDiv.addEventListener("mouseleave", function(){
// cursor.innerHTML = 1111
// I
// gsap.to (cursor, {
// scale:1,
// backgroundColor:"#fff"
// })
// })

