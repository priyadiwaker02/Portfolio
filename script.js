var menu = document.querySelector(".menu");
var open = document.querySelector(".open");

var page2 = document.querySelector(".page2")
var page3 = document.querySelector(".page3")
var page4 = document.querySelector(".page4")


    open.addEventListener("mouseenter", function(){
        menu.style.top = "0%";
        menu.style.right = "0%"
        menu.style.scale = "1"
    })

    menu.addEventListener("mouseleave", function(){
        menu.style.top = "-100%";
        menu.style.right = "-100%"
        menu.style.scale = "0";
        
    })


;


    var cursor = document.querySelector("#smcircle");
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    window.addEventListener("mousemove", function(dets){
    
    
        gsap.to(cursor,{
            x:dets.clientX,
            y: dets.clientY,
            duration: 0.5,
            ease:Expo
        })
    })

    

    var menu = document.querySelector('.menu');

    
    open.addEventListener("mousemove",function(){
        cursor.style.background = 'white';
        cursor.style.border = "none"
        cursor.style.scale = '4';
        cursor.style. mixBlendMode= "difference";
        open.syle.fontSize= "6vw";
    })

    menu.addEventListener("mouseleave",function(){
        cursor.style.background = 'none';
        cursor.style.border= "2px solid white"
        cursor.style.scale = '1';
        cursor.style. mixBlendMode= "none";
        open.syle.fontSize= "6vw"
    })







    var Mopen = document.querySelector(".mobile-open");
    var Mclose = document.querySelector(".mobile-close");

    Mopen.addEventListener("click", function(){
        menu.style.top = "0%";
        menu.style.right = "0%"
        menu.style.scale = "1";
        menu.style.display="flex"
        Mopen.style.display = "none";
        Mclose.style.display = "flex";
        console.log("hello")
    })
    Mclose.addEventListener("click", function(){
        menu.style.top = "-100%";
        menu.style.right = "-100%"
        menu.style.scale = "0";
        menu.style.display="none"
        Mclose.style.display = "none";
        Mopen.style.display = "flex";
        console.log("hello")
    })

    // var portfolio = document.querySelector(".portfolio")


    // portfolio.addEventListener("mousemove",function(){
    //     cursor.style.background = 'white';
    //     cursor.style.border = "none"
    //     cursor.style.scale = '4';
    //     cursor.style. mixBlendMode= "difference";
    //     open.syle.fontSize= "6vw";
    // })

    // portfolio.addEventListener("mouseleave",function(){
    //     cursor.style.background = 'none';
    //     cursor.style.border = "2px solid white"
    //     cursor.style.scale = '1';
    //     cursor.style. mixBlendMode= "none";
    // })



    var t2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page1",
            // markers:true,
            start:"100% 90%",
            end:"30% 10%",
            scrub:2
        }
    })
    
    
    t2.from(".name",{
        top:"35%",
    })
    
    var t1 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            // markers:true,
            start:"0% 50%",
            end:"30% 40%",
            scrub:2
        }


    })

    t1.from(".page2",{
        duration:1,
        opacity:0
    })
    
    t1.from(".text",{
        top:"100%",
        duration:0.5
    })
    
    tl.from(".about",{
        opacity:0,
        duration:2
    })



// var t3 = gsap.timeline({
//         scrollTrigger:{
//             trigger:".page2",
//             markers:true,
//             start:"0% 50%",
//             end:"30% 40%",
//             scrub:2
//         }


//     })


// var t4 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".page3",
//         markers:true
//     }
// })




ScrollTrigger.create({
    onUpdate:function(prg){
        gsap.to("#progress",{width: Math.floor(prg.progress * 100)+"%"});
    }
})
