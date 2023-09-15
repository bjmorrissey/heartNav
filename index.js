console.log('here')

const heart = document.querySelector('.navHeart')
const greet = document.querySelector('.greet')
const navigation = document.querySelector('.navigation')
const brian = document.querySelector('.brian')
let checked = false

function clicked() {
    
    if (!checked) {
        checked = true
        heart.classList.remove('heartClickOff')
        heart.classList.add('heartClickOn')
        navigation.classList.remove('navBarRemove')
        navigation.classList.add('navBarAnimate')
        brian.classList.remove('disappear')
        brian.classList.add('appear')
        greet.classList.add('disappear')
        console.log(checked)
        console.log('nav checked, should be open')
    } else {
        checked = false
        heart.classList.remove('heartClickOn')
        heart.classList.add('heartClickOff')
        navigation.classList.remove('navBarAnimate')
        navigation.classList.add('navBarRemove')
        greet.classList.remove('disappear')
        brian.classList.remove('appear')
        brian.classList.add('disappear')
        
        console.log(checked)
        console.log('nav closed, should be false')
    }
}

heart.addEventListener('click', clicked)
