const loginEmailInput = document.getElementById('loginEmailInput')
const loginPasswordInput = document.getElementById('loginPasswordInput')
const loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const loginEmail = loginEmailInput.value
    const loginPassword = loginPasswordInput.value

    if(!loginEmail || !loginPassword) {
        alert('Fill in all fields!')
        return
    }

    const allUsers = JSON.parse(localStorage.getItem('users'))
    const foundUser = allUsers?.find(user => user.email === loginEmail)
    
    if(!foundUser) {
        alert('User with this email was not found!')
        return
    }

    if(foundUser.password !== loginPassword) {
        alert('User`s password does not match!')
        return
    }

    alert(`Welcome, ${foundUser.username}!`)
})

// FIND
// const students = [
//     {
//         name: 'Temirlan',
//         lesson: 'Frontend'
//     },
//     {
//         name: 'Sayat',
//         lesson: 'Backend'
//     },
//     {
//         name: 'Nurgisa',
//         lesson: 'Testing'
//     }
// ]

// console.log(students.find(student => {
//     return student.name === 'Konstantin'
// }))