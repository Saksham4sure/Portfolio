import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis({
  autoRaf: true
});

// gsap.from(".prename", {
//   y:500,
//   stagger: 0.1,
//   duration: 1,
//   ease: "power4.out",
//   scale: 0.2,
//   filter: "blur(10px)",
// });



//  gsap.to(".prename", {
//   x: -1500,
//   delay: 1,
//   stagger: 0.1,
//   duration: 0.8,
//   ease: "power4.in",

// });


// gsap.to(".preloader", {
//   x: -1500,
//   delay: 1.4,
//   duration: 1,
//   ease: "power4.in",

// });




gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skill",    
    start: "top 80%",    
    end: "bottom 30%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  x: -100,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".project", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 90%",    
    end: "bottom 80%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  y: 200,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".tags", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 80%",    
    end: "bottom 30%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  x: 50,
  opacity: 0,
  stagger: 0.1,
});


gsap.from(".project h1", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 90%",    
    end: "bottom 30%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  x: -100,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".project img", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 90%",    
    end: "bottom 60%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  scale: 0,
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".discri", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 90%",    
    end: "bottom 60%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".project i", {
  scrollTrigger: {
    trigger: ".project",    
    start: "top 90%",    
    end: "bottom 60%",
    scrub: true,    
    toggleActions: "play none none reverse", 
    markers: false         
  },
  scale: 0,
  y: 100,
  opacity: 0,
  stagger: 0.2,
});






window.addEventListener('mousemove', function (dets) {
  gsap.to("#cursor", {
    left: dets.clientX,
    top: dets.clientY,

  })
})


gsap.registerPlugin(CSSRulePlugin);

document.addEventListener("DOMContentLoaded", function () {
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


  toggleButton.addEventListener("click", function () {
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

const pimg = document.querySelector(".project img");

document.querySelectorAll('.project').forEach(project =>{
  project.onclick = () =>{

  }
})






