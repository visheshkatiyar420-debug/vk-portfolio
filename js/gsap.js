// gsap.registerPlugin(ScrollTrigger);

// const navTl=gsap.timeline();

// navTl
// .from(".logo",{
//   y:-30,
//   opacity:0,
//   duration:.8,
//   ease:"power3.out"
// })
// .from(".nav-links li",{
//   y:-20,
//   opacity:0,
//   stagger:.08,
//   duration:.5
// },"-=.4")
// .from(".nav-buttons",{
//   y:-30,
//   opacity:0,
//   duration:0.5,
//   ease:"power3.out"
// },">");

// //hero animation 

// const heroTl = gsap.timeline({
//   delay:0.2,
//   onComplete:startFloating
// });

// heroTl
// .from(".available",{
//   y:-25,
//   opacity:0,
//   duration:.5,
//   ease:"power2.out"
// })

// .from(".hero-content h3",{
//   x:-40,
//   opacity:0,
//   duration:.5,
//   ease:"power2.out"
// },"-=.2")

// .from(".hero-content h1",{
//   x:-80,
//   opacity:0,
//   duration:.8,
//   ease:"power3.out"
// },"-=.2")

// .from(".hero-content h2",{
//   x:-50,
//   opacity:0,
//   duration:.6,
//   ease:"power2.out"
// },"-=.4")

// .from(".hero-content p",{
//   y:20,
//   opacity:0,
//   duration:.6
// },"-=.3")

// .from(".hero-buttons ",{
//   y:30,
//   opacity:0,
//   stagger:.15,
//   duration:.5,
//   ease:"power2.out"
// },"-=.2")

// .from("#social-icons a",{
//   x:-30,
//   y:30,
//   scale:0,
//   opacity:0,
//   stagger:.1,
//   duration:.4,
//   ease:"back.out(2)"
// },"-=.2")

// .from(".hero-image img",{
//   x:120,
//   opacity:0,
//   scale:.85,
//   duration:1,
//   ease:"power3.out"
// },"-=1")

// .from(".basketball,.cricket,.note,.code-box",{
//   opacity:0,
//   scale:.8,
//   stagger:.1,
//   duration:.6,
//   ease:"back.out(1.7)"
// },"-=.6")

// .from(".scroll-down",{
//   y:-15,
//   opacity:0,
//   duration:.5
// },"-=.3");

// function startFloating(){

//   gsap.to(".basketball",{
//     y:-20,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
//     ease:"sine.inOut"
//   });

//   gsap.to(".cricket",{
//     y:-15,
//     duration:2.3,
//     repeat:-1,
//     yoyo:true,
//     ease:"sine.inOut"
//   });

//   gsap.to(".note",{
//     y:-18,
//     duration:2.5,
//     repeat:-1,
//     yoyo:true,
//     ease:"sine.inOut"
//   });

//   gsap.to(".code-box",{
//     y:-12,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
//     ease:"sine.inOut"
//   });

//   gsap.to(".scroll-down i",{
//     y:10,
//     duration:.8,
//     repeat:-1,
//     yoyo:true,
//     ease:"power1.inOut"
//   });

// }

// //about animation

// const aboutTl = gsap.timeline({
//   scrollTrigger:{
//     trigger:"#about",
//     start:"top 75%",
//     end:"bottom 60%",
//     scrub:1.5,
//     // markers:true
//   }
// });

// gsap.from("#info-box1,#info-box2,#info-box3,#info-box4",{
//   y:60,
//   opacity:0,
//   stagger:0.15,
//   duration:0.8,
//   scale:0.7,
//   ease:"power3.out",
//   scrollTrigger:{
//     trigger:".about-info",
//     start:"top 100%",
//     end:"top 50%",
//     scrub:1,
//     // markers:true
//   }
// });

// gsap.from("#about-card5,#about-card4,#about-card3,#about-card2,#about-card1",{
//   y:-50,
//   opacity:0,
//   scale:.8,
//   stagger:0.5,
//   ease:"back.out(1.7)",
//   scrollTrigger:{
//   trigger:".about-image",
//   start:"top 80%",
//   end:"top 50%",
//   scrub:1,
//   // markers:true
//   }
// },"<0.2")

// aboutTl

// .from(".section-title span",{
//   y:40,
//   opacity:0
// })

// .from(".section-title h2",{
//   y:50,
//   opacity:0
// },"<0.1")

// .from(".section-title p",{
//   y:40,
//   opacity:0
// },"<0.1")

// .from(".about-image img",{
//   x:-120,
//   opacity:0,
//   scale:.9,
//   ease:"power3.out"
// },"-=0.2")

// .from(".about-content h3",{
//   x:60,
//   opacity:0
// },"-=0.2")

// .from(".about-content p",{
//   x:60,
//   opacity:0,
//   stagger:.15
// },"<0.1")



// //skill section animation

// const skillsTl = gsap.timeline({
//   scrollTrigger:{
//     trigger:"#skills",
//     start:"top 100%",
//     end:"bottom 100%",
//     scrub:1.2,
//     markers:true
//   }
// });

// skillsTl

// .from("#skills .section-title",{
//   y:120,
//   opacity:0,
//   scale:.9,
//   duration:1
// })

// .from(".skills-grid",{
//   scale:.85,
//   opacity:0,
//   duration:1
// },"-=.6")

// .from(".skill-card",{
//   y:180,
//   opacity:0,
//   rotateX:-70,
//   transformOrigin:"top center",
//   stagger:{
//     amount:0.8,
//     grid:[2,3],
//     from:"start"
//   },
//   ease:"power4.out",
//   duration:1
// },"-=.8")

// .from(".skill-icon",{
//   scale:0,
//   rotate:720,
//   stagger:.08,
//   duration:.8,
//   ease:"elastic.out(1,.4)"
// },"-=.8")

// .from(".skill-card h3",{
//   y:40,
//   opacity:0,
//   stagger:.08
// },"-=.8")

// .from(".skill-card p",{
//   y:30,
//   opacity:0,
//   stagger:.08
// },"-=.8")

// .from(".skill-footer",{
//   y:25,
//   opacity:0,
//   stagger:.08
// },"-=.8");

// window.addEventListener("load", () => {
//   ScrollTrigger.refresh();
// });

// gsap.registerPlugin(ScrollTrigger);

// function initNavbar(){}

// function initHero(){}

// function initAbout(){}

// function initSkills(){}

// function initProjects(){}

// function initServices(){}

// function initWorkspace(){}

// function initContact(){}

// function initFooter(){}

// function startFloating(){}

// initNavbar();
// initHero();
// initAbout();
// initSkills();
// initProjects();
// initServices();
// initWorkspace();
// initContact();
// initFooter();

// window.addEventListener("load", () => {
//     ScrollTrigger.refresh(true);
// });