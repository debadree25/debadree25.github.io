
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

var menuopen = false;

const menu = document.querySelector("#menu");
const menulist = document.querySelector(".menu-list");

const tl2 = gsap.timeline({ paused: true, reversed: true });
tl2.fromTo(menulist, 0.2, { top: "-30vh" }, { top: "10vh" })
    .fromTo(menulist, 0.5, { opacity: "0" }, { opacity: "1" , ease:Power2.easeInOut });
menu.addEventListener("click", function () {
    tl2.reversed() ? tl2.play() : tl2.reverse();
    console.log('ok');
})

docReady(function () {
    const tl = gsap.timeline();
    const headline = document.querySelector('.headline');
    const lead = document.querySelector('.lead');
    tl.fromTo(headline, 1, { x: '-100%' }, { x: 0, ease: Power2.easeInOut })
        .fromTo(lead, 1, { x: '-100%' }, { x: 0, ease: Power2.easeInOut });

});