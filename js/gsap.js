import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin'; 

gsap.registerPlugin(TextPlugin); 

const text = document.querySelector('.multiple-text');

const tl = gsap.timeline({
    repeat: -1,
});

tl.to(text, {
    duration: 1,
    text: { value: "Frontend Developer", },
})
.to(text, {
    duration: 1,
    text: { value: "Graphic Designer", },
})
.to(text, {
    duration: 1,
    text: { value: "Gamer", },
})

tl.play();