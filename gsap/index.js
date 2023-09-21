const t1 = gsap.timeline(); 
gsap.defaults({opacity: 0})

t1.from (".navButton1", {x: 100, duration: 1, ease: "power2.inOut"})
t1.from (".navButton2", {x: 100, duration: 1, ease: "power2.inOut"})
t1.from (".navButton3", {x: 100, duration: 1, ease: "power2.inOut"})

gsap.to(".banner", {})