const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');
const bars = document.getElementById('bars')

hamburger.addEventListener('click', () => {
    list.classList.toggle('active');
    bars.classList.toggle('fa-xmark');
});

var tl = gsap.timeline()

tl.from("#logo", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
});

tl.from("ul ", {  
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});

tl.from("h1 ", {  
    y: -10,
    opacity: 0,
    duration: 0.5,
});


tl.from("img ", {  
    y: 20,
    opacity: 0,
    duration: 1,
});

