console.log('here')

const heart = document.querySelector('.navHeart')
const greet = document.querySelector('.greet')
let checked = false

function clicked() {
    
    if (!checked) {
        checked = true
        heart.classList.remove('heartClickOff')
        heart.classList.add('heartClickOn')
        greet.classList.add('disappear')
        console.log(checked)
        console.log('nav checked, should be open')
    } else {
        checked = false
        heart.classList.remove('heartClickOn')
        heart.classList.add('heartClickOff')
        greet.classList.remove('disappear')
        console.log(checked)
        console.log('nav closed, should be false')
    }
}

heart.addEventListener('click', clicked)
