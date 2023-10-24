gsap.to("#navbar", {
    backgroundColor: "black",
    height: "110px",

    duration: 0.5,
    scrollTrigger:{
        trigger: "#navbar",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
    
})