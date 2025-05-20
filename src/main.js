import Lenis from 'lenis'
import gsap from 'gsap';

const lenis = new Lenis({
    autoRaf: true
  });

  gsap.from(".prename", {
    y:500,
    stagger: 0.1,
    duration: 1,
    ease: "power4.out",
    scale: 0.2,
    filter: "blur(10px)",
  });


    gsap.to("#prenameS", {
    delay:1,
    duration: 1.5,
    scale: 150,
    rotate: 70,
    ease: "power4.inOut",
  }); 

  /* gsap.to(".prename", {
    x: -500,
    delay: 1.5,
    stagger: 0.1,
    duration: 1,
  });

  gsap.from(".bgbox", {
    x: -2000,
    duration: 1,
    delay: 1.3,
  });  */

  gsap.to(".preloader", {
    opacity: 0,
    delay: 2.3,
  });



  
  window.addEventListener('mousemove',  function (dets){
      gsap.to("#cursor",{
        left:dets.clientX,
        top:dets.clientY,
        
      })
  } )

gsap.registerPlugin(CSSRulePlugin);

document.addEventListener("DOMContentLoaded", function() {
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger")
  let isOpen = false;



  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut"
  });

  timeline.to(".menu-item p", {
    duration: 1,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
    opacity: 100,
    stagger: 0.1,
    ease: "power4.out "
  }, "-=1");
  
  timeline.to(activeItemIndicator, {
    width: "100%",
    duration: 1,
    ease: "power4.out",
    delay: 0.5,
  }, "<");

  timeline.to(".sub-nav", {
    y: 0,
    stagger: 0.2,
    filter: "blur(0px)",
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: 0.5
  }, "<");


  toggleButton.addEventListener("click", function() {
    if (isOpen) {
      timeline.reverse();
    }
    else {
      timeline.play();
    }

    isOpen = !isOpen;
  });

  window.addEventListener("scroll", function () {
    if (isOpen) {
      timeline.reverse();
      toggleButton.classList.remove("active");
      document.body.classList.remove("no-scroll");
      isOpen = false;
    }
  });
})



