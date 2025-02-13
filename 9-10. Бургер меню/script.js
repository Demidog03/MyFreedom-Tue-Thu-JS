const burgerMenu = document.getElementById('burgerMenu')
const burgerCloseBtn = document.getElementById('burgerCloseBtn')
const burgerOpenBtn = document.getElementById('burgerOpenBtn')


burgerCloseBtn.addEventListener('click', () => {
    burgerMenu.classList.add('closed')
    burgerOpenBtn.style.display = 'flex'
})

burgerOpenBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('closed')
    burgerOpenBtn.style.display = 'none'
})