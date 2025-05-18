import Lenis from 'lenis'
import gsap from 'gsap';

const lenis = new Lenis({
    autoRaf: true
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


  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.2,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut"
  });

  timeline.to(".menu-item p", {
    duration: 1,
    y: 0,
    letterSpacing: 0,
    filter: "blur(0px)",
    stagger: 0.2,
    ease: "power4.out "
  }, "-=1");
  
  timeline.to(activeItemIndicator, {
    width: "100%",
    duration: 1,
    ease: "power4.out",
    delay: 0.5,
  }, "<");

  timeline.to(".sub-nav", {
    bottom: "10%",
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