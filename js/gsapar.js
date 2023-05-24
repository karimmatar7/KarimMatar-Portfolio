import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin'; 

gsap.registerPlugin(TextPlugin); 

const text = document.querySelector('.multiple-text');

const tl = gsap.timeline({
    repeat: -1,
});

tl.to(text, {
    duration: 1,
    text: { value: "مطور واجهة المستخدم", },
})
.to(text, {
    duration: 1,
    text: { value: "مصمم جرافيك", },
})
.to(text, {
    duration: 1,
    text: { value: "لاعب فيديو جيمز", },
})

tl.play();