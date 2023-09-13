console.log('here')

const nav = document.querySelector('nav')
let checked = false

function clicked() {
    
    if (!checked) {
        checked = true
        nav.classList.add('openNav')
        console.log(checked)
        console.log('nav checked, should be open')
    } else {
        checked = false
        nav.classList.remove('openNav')
        console.log(checked)
        console.log('nav closed, should be false')
    }
}

nav.addEventListener('click', clicked)
