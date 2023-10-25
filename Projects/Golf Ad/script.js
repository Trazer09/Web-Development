gsap.to("#navbar", {
    backgroundColor: "black",
    height: "110px",

    duration: 0.5,
    scrollTrigger:{
        trigger: "#navbar",
        scroller: "body",
       
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
    
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "bottom -70%",
        scrub: 2
    }
})