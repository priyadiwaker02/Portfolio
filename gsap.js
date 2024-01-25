

gsap.from(".name",{
  top:"60%",
  opacity:0,
  duration:2,
   delay:1
})

gsap.from(".portfolio",{
  left:"-20%",
  duration:1,
  delay:2
})

gsap.from(".open",{
  left:"100%",
  duration:0.5,
  delay:3
})

function scrBy(x, y) {
    window.scrollBy({
      left: x, top: y,
      behavior: "smooth"
    });
  }

  function scrInto(id) {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }

  var t4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        // markers:true,
        start:"10% 90%",
        end:"10% 40%",
        scrub:2
    }
})


t4.from(".page3",{
    duration:1,
    opacity:0
})

t4.from(".skills-container",{
    duration:2,
    opacity:0,
    delay:2,
    top:"100%"
})


var t5 = gsap.timeline({
  scrollTrigger:{
    trigger:".page4"
  }
})


