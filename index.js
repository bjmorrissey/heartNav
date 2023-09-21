console.log('here')

const heart = document.querySelector('.navHeart')
const greet = document.querySelector('.greet')
const navigation = document.querySelector('.navigation')
const brian = document.querySelector('.brian')
const insQuote = document.querySelector('.inspireQuote')
const authorLine = document.querySelector('.author')
let checked = false

// GSDevTools.create();

const heartTime = gsap.timeline({repeat: -1})


heartTime.to(heart, {scale: 0.9, duration: .05 })
.to(heart, {scale: 1})
.to(heart, {scale: 1})
.to(heart, {scale: 0.85, duration: .05})
.to(heart, {scale: 1})