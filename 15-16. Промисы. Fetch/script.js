// PROMISE - обещание - коремиз

// const promise = new Promise((resolve, reject) => {
//     resolve('Я пойду завтра с вами в кафе!')
//     // reject('Блин сегодня никак не получится(')
// })

// promise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('ПРОМИС выполнился')
// })


// Пример 1
// const userNumber = +prompt('Напишите любое число от 0 до 5')

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.round(Math.random() * 5)

//     if(userNumber === randomNumber) {
//         resolve({
//             randomNumber,
//             message: 'Поздравляю вы угалади число!'
//         })
//     }
//     else {
//         reject({
//             randomNumber,
//             message: 'К сожалению числа не совпадают('
//         })
//     }
// })

// promise.then(result => {
//     alert(result.message)
//     console.log(`Ваше число: ${userNumber}`)
//     console.log(`Случайное число: ${result.randomNumber}`)
// }).catch((error) => {
//     alert(error.message)
//     console.log(`Ваше число: ${userNumber}`)
//     console.log(`Случайное число: ${error.randomNumber}`)
// })


// Пример 2
// const elements = ['Цветы', 'Машина', 'Смартфон']

// // Случайное число от 0 до 2
// const promise1 = new Promise((res) => {
//     const randomIndex = Math.round(Math.random() * (elements.length - 1))
//     res(elements[randomIndex])
// })

// const promise2 = new Promise((res) => {
//     const randomIndex = Math.round(Math.random() * (elements.length - 1))
//     res(elements[randomIndex])
// })

// const promise3 = new Promise((res) => {
//     const randomIndex = Math.round(Math.random() * (elements.length - 1))
//     res(elements[randomIndex])
// })

// Promise.all([promise1, promise2, promise3]).then((result) => {
//     console.log(result.join(', '))

//     const isWinner = result.every(element => element === result[0])
//     console.log(isWinner ? 'Поздравяю. У вас джекпот!' : 'К сожалению вы не выиграли(')
// })


// fetch

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.org/posts/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     console.log(data)
// }


// fetch('https://jsonplaceholder.org/posts/1').then(response => {
//     return response.json()
// }).then(data => {
//     // throw new Error('ОШИБКА')
//     console.log(data)
// }).finally(() => {
//     console.log('FINALLY')
// }).catch(err => {
//     console.log(err)
// })


// ЗАДАНИЕ ОТ ОЛЖАС
// Создайте форму с инпутом User ID и кнопкой поиск (search).
// Пользователь вводит в форму число (id) и при нажатии на кнопку поиска
// отправяется запрос по ссылке 'https://jsonplaceholder.org/users/1'
// В конце нужно получить ответ запроса и отобразить в html-e
// поля id, firstname, lastname, email, phone

// Используйте fetch()

const userSearchBtn = document.getElementById('userSearchBtn')
const userIdInput = document.getElementById('userIdInput')
const userInfoContainer = document.getElementById('userInfoContainer')

userSearchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    
    fetch(`https://jsonplaceholder.org/users/${userIdInput.value}`)
    .then(res => {
        return res.json()
    })
    .then((data) => {
        console.log(data)

        userInfoContainer.innerHTML = `
            <p><b>ID</b>: ${data.id}<p/>
            <p><b>Firstname</b>: ${data.firstname}<p/>
            <p><b>Lastname</b>: ${data.lastname}<p/>
            <p><b>Email</b>: ${data.email}<p/>
            <p><b>Phone number</b>: ${data.phone}<p/>
        `
    })
    .catch(err => {
        alert('User not found!')
    })
})