
const body = document.querySelector("body")
const darkBtn = document.querySelector(".header__dark-mode")
const lightBtn = document.querySelector(".header__light-mode")
//togle mode
const modeLocal = localStorage.getItem('mode')

if (modeLocal) {
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

const toggleModeBtn = () => {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

darkBtn.addEventListener('click', () => {
    toggleModeBtn()
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
    toggleModeBtn()
    localStorage.setItem('mode', '')
})
