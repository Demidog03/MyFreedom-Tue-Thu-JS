// Синхронный код
// console.log('Привет') // 1
// for (let i = 0; i < 10000000000; i++) {
   
// } // 2
// console.log('Пока') // 3

// Ассинхронный код
// console.log('Привет') // 1
// setTimeout(() => {
//     console.log('ТАЙМАУТ 1')
// }, 0) // 3
// setTimeout(() => {
//     console.log('ТАЙМАУТ 2')
// }, 0) // 4
// console.log('Пока') // 2

// SETTIMEOUT
// setTimeout(() => {
//     console.log('ТАЙМАУТ 1')
//     setTimeout(() => {
//         console.log('ТАЙМАУТ 1.1')
//     }, 1000)
// }, 2000)
// setTimeout(() => {
//     console.log('ТАЙМАУТ 2')
// }, 2000)
// setTimeout(() => {
//     console.log('ТАЙМАУТ 3')
// }, 1000)


// SETINTERVAL
// const stopIntervalBtn = document.getElementById('stopIntervalBtn')

// const interval = setInterval(function() {
//     console.log('ИНТЕРВАЛ 1')
// }, 1000)

// stopIntervalBtn.addEventListener('click', () => {
//     clearInterval(interval)
// })


// const promise = new Promise((resolve) => {
//     resolve('ПРОМИС')
// }) // 1
// console.log('КОНСОЛЬ ЛОГ 1') // 2
// setTimeout(() => {
//     console.log("ТАЙМАУТ 1")
//     setTimeout(() => {
//         console.log('ПРОМИС В ПРОМИСЕ')
//     }, 0)
//     promise.then(() => {
//         console.log('ПРОМИС В ТАЙМАУТЕ')
//     })
// }, 0) // 5
// console.log('КОНСОЛЬ ЛОГ 2') // 3
// setTimeout(() => {
//     console.log("ТАЙМАУТ 2")
// }, 0) // 6
// console.log('КОНСОЛЬ ЛОГ 3') // 4

// promise.then(res => {
//     setTimeout(() => {
//         console.log('ТАЙМАУТ ПРОМИС')
//     }, 0)
//     console.log(res)
// }) // 7


// 'GET'
// Получаем ресурс не отправляя данные
// Получить новости
// Получить картинки
// Получить файлы

// 'POST'
// BODY / PAYLOAD - тело запроса
// /registration -> {email: 'olzhas@gmail.com", password: 'dfsafasf'}

// DELETE
// BODY / PAYLOAD - тело запроса
// /deleteAccount

// PUT
// BODY / PAYLOAD - тело запроса
// /обновить все свои данные -> /changeUser

// PATCH
// BODY / PAYLOAD - тело запроса
// изменить пароль -> /changePassword


// httpRequest
const httpRequest = new XMLHttpRequest()
httpRequest.open('GET', 'https://jsonplaceholder.org/posts/1')
httpRequest.send()
httpRequest.onload = () => {
    console.log(httpRequest.getResponseHeader('method'))
    const data = JSON.parse(httpRequest.response)
    const p = document.createElement('p')
    p.innerText = data.title

    const img = document.createElement('img')
    img.style.width = '300px'
    img.src = data.image

    document.body.appendChild(p)
    document.body.appendChild(img)
}
