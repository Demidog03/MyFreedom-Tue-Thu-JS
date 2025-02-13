const openModalBtn = document.getElementById('openModalBtn')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const modalCloseIcon = document.getElementById('modalCloseIcon')

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

modalCloseIcon.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})