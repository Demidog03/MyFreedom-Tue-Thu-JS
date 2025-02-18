const usernameInput = document.getElementById('usernameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const confirmPasswordInput = document.getElementById('confirmPasswordInput')
const signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const username = usernameInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value

    if(!email || !username || !password || !confirmPassword) { // !email -> email === ''
        alert('Fill in all fields!')
        return
    }

    if(password !== confirmPassword) {
        alert('Confirm password does not match with password!')
        return
    }

    const newUser = {
        username,
        email,
        password
    }

    let allUsers = JSON.parse(localStorage.getItem('users'))

    if(allUsers) {
        if(allUsers.some(user => user.email === newUser.email)) {
            alert('User with this email is already exists!')
            return
        }
        else {
            allUsers.push(newUser)
        }
    }
    else {
        allUsers = [newUser]
    }
    

    localStorage.setItem('users', JSON.stringify(allUsers))
    document.location.href = '../login/login.html'
})

// Метод some
// const numbers = [1, 2, 3, 4]
// console.log(numbers.some(num => {
//     return num > 3
// }))

// Метод every
// const numbers = [4, 4, 4, 4]
// console.log(numbers.every(num => {
//     return num === 4
// }))

// Falsy values
// false
// -0
// 0
// ''
// undefined
// null
// NaN
// document.all