import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const openNavbarBtn = document.querySelector('#open-navbar-btn');
const closeNavbarBtn = document.querySelector('#close-navbar-btn');
const navbar = document.querySelector('#navbar');

openNavbarBtn.addEventListener('click', () => {
  navbar.classList.remove('max-lg:-translate-x-full');
})
closeNavbarBtn.addEventListener('click', () => {
  navbar.classList.add('max-lg:-translate-x-full');
})

gsap.registerPlugin(ScrollTrigger);

let section1Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "center top",
    scrub: 0.6,
    // markers: true,
    onEnter: () => {
      section1Timline.to('#section1-img-box1', {
        y: -300,
      }, "<")
      section1Timline.to(['#section1-img-box2'], {
        y: 300,
      }, "<")
    },
  }
})

gsap.set('#section3-img', { opacity: 0 })
gsap.set('#section3-text-box', { x: 500, y: 500 })

let section3Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    toggleActions: "play complete none none",
    start: "top 30%",
    end: "center top",
    // markers: true,
    onEnter: () => {
      section3Timline.to('#section3-img', {
        opacity: 1,
        duration: 0.6,
        ease: "power3"
      }, "<")

      section3Timline.to('#section3-text-box', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3"
      }, "<")
    },
    // onLeave: () => {
    //   section3Timline.to('#section3-img', {
    //     y: 500,
    //     opacity: 0,
    //   }, ">")
    // }
  },
});

gsap.set('#section4-img', { scale: 0.3 })
gsap.set('#section4-text-box', { x: 500, y: 500,})

let section4Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    toggleActions: "play complete none none",
    start: "top 30%",
    end: "center top",
    // markers: true,
    onEnter: () => {
      section4Timline.to('#section4-img', {
        scale: 1,
        duration: 0.6,
        ease: "power3"
      }, "<")

      section4Timline.to('#section4-text-box', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3"
      }, "<")
    },
  }
})

const imgBox1Height = document.querySelector('#section5-img-box1').scrollHeight - 680;
gsap.set('#section5-img-box2', { y: `-${imgBox1Height}` })

let section5Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "top top",
    end: "center top",
    scrub: 0.5,
    // markers: true,
    onEnter: () => {
      section5Timline.to(['#section5-img-box1', '#section5-img-box3'], {
        y: `-${imgBox1Height}`,
      }, "<")
      section5Timline.to(['#section5-img-box2'], {
        y: 0,
      }, "<")
    },
  }
})

let section6Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section6",
    start: "30% top",
    // markers: true,
    onEnter: () => {
      section6Timline.to('.section6-img', {
        x: "100vw",
      }, "<")
      section6Timline.to('.section6-img-alt', {
        scale: 3,
      }, "<")
    },
  }
})

const section7ImgBox = document.querySelector('#section7-img-box');

let section7Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section7",
    start: "top top",
    scrub: 0.6,
    // markers: true,
    onEnter: () => {
      section7Timline.to('#section7-img-box', {
        x: `-${section7ImgBox.scrollWidth - section7ImgBox.clientWidth}`,
      }, "<")
    },
  }
})