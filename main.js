import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const img = document.querySelectorAll('.img')

img.forEach((img)=>{
  gsap.to(img, {
    scale: 1.2,
    scrollTrigger: {
      trigger: img,
      scrub: true,
      start: "30% 70%",
      end: "70% 30%",
      markers: false,
    },
    transformOrigin: "center", 
    ease: "none"
  })
});

// img.forEach((el) => {
//   ScrollTrigger.create({
//     trigger: el,
//     markers: false,
//     start: "30% 70%",
//     end: "70% 30%",
//     scrub: true,
    
//     onEnter: () => el.classList.add("scale"),
//     onLeave: () => el.classList.remove("scale"),
//     onEnterBack: () => el.classList.add("scale"),
//     onLeaveBack: () => el.classList.remove("scale"),
//   });
// })


