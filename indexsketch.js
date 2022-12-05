//---home page animation---//
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.35 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".landing", { opacity: 0 }, { opacity: 1, duration: 1 },"-=1" );

var typed = new Typed(".main-text2", {
    strings: [":)","Hello","Let's get to know me","Click the button down below"],
    delay:1,
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
}
);


//--mouse cursor--//
var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    //--work page animation--//