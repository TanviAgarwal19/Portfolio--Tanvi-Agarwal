//--mouse cursor--//
var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

//--heading animation--//
const text= document.querySelector(".fancy");

const strText = text.textContent;

const splitText= strText.split("");

text.textContent ="";
 for (let i=0; i < splitText.length; i++)
  {
   text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
let char = 0;

let timer= setInterval(onTick, 50);

function onTick(){ 
  const span = text.querySelectorAll('span') [char]; 
  span.classList.add('fade');

char++

if(char=== splitText.length) {

complete(); 
return;
}
}

function complete(){
  clearInterval(timer);
  timer= null;
}
    
      //common reveal options to create reveal animations
      ScrollReveal({
        //reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });

      //target elements, and specify options to create reveal animations
      ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
      ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
      ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
      ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
      ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });
    