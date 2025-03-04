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
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.org/posts/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     console.log(httpRequest.getResponseHeader('method'))
//     const data = JSON.parse(httpRequest.response)
//     const p = document.createElement('p')
//     p.innerText = data.title

//     const img = document.createElement('img')
//     img.style.width = '300px'
//     img.src = data.image

//     document.body.appendChild(p)
//     document.body.appendChild(img)
// }

// ЗАДАНИЕ 1

// 1
// let i = 1
// const interval = setInterval(() => {
//     if(i === 5) {
//         clearInterval(interval)
//     }
//     console.log(`Сообщение номер ${i}`)
//     i++
// }, 2000)

//2
// for(let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }
// // i = 1 -> 1 * 2000 = 2000
// // i = 2 -> 2 * 2000 = 4000
// // i = 3 -> 3 * 2000 = 6000
// // i = 4 -> 4 * 2000 = 8000
// // i = 5 -> 5 * 2000 = 10000

//3
// Типа рекурсия
// function someFun() {
//     someFun()
// }
// let i = 1

// function fun() {
//     if(i === 6) {
//         return
//     }
//     console.log(`Сообщение номер ${i}`)
//     i++
//     setTimeout(fun, 2000)
// }

// fun()


// ЗАДАНИЕ 2
// const timeText = document.getElementById('timeText')

// setInterval(() => {
//     const date = new Date()
//     let hours = String(date.getHours()).padStart(2, '0') // 07
//     let minutes = String(date.getMinutes()).padStart(2, '0')
//     let seconds = String(date.getSeconds()).padStart(2, '0')

//     // if(hours < 10) {
//     //     hours = '0' + hours
//     // }
//     // if(minutes < 10) {
//     //     minutes = '0' + minutes
//     // }
//     // if(seconds < 10) {
//     //     seconds = '0' + seconds
//     // }

//     timeText.innerText = `${hours}:${minutes}:${seconds}`
// }, 1000)


// ЗАДАНИЕ 3
// const div1 = document.getElementById('div1')

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     console.log(data)
//     div1.innerText = data.title
// }

// ЗАДАНИЕ 4
// const list = document.getElementById('list')

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response).slice(0, 20)
//     data.forEach(element => {
//         const li = document.createElement('li')
//         li.innerText = element.title
//         list.appendChild(li)
//     });
// }

// ЗАДАНИЕ 5
const city = document.getElementById('city')
const time = document.getElementById('time')
const weatherIcon = document.getElementById('weatherIcon')
const weatherName = document.getElementById('weatherName')
const weatherTemp = document.getElementById('weatherTemp')
const windSpeed = document.getElementById('windSpeed')
const futureWeatherTemplate = document.getElementById('futureWeatherTemplate')
const futureWeatherContainer = document.getElementById('futureWeatherContainer')
const spinnerOverlay = document.getElementById('spinnerOverlay')
const searchCityBtn = document.getElementById('searchCityBtn')
const cityNameInput = document.getElementById('cityNameInput')
const toast = document.getElementById('toast')
const toastBody = document.getElementById('toastBody')

searchCityBtn.addEventListener('click', () => {
    console.log(cityNameInput.value)

    getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameInput.value}&appid=a94d0a5ac08570add4b47b8da933f247&units=metric`)
})

navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=a94d0a5ac08570add4b47b8da933f247&units=metric`)
})

function getWeather(link) {
    spinnerOverlay.classList.remove('hidden')

    const httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', link)
    httpRequest.send()
    httpRequest.onload = () => {
        const data = JSON.parse(httpRequest.response)
        console.log(data)

        if (httpRequest.status === 200 && data) {
            futureWeatherContainer.innerHTML = ''
            
            // Текущий город и время
            city.innerText = data.city.name
            time.innerText = getTimeByOffset(data.city.timezone)
        
            const currentWeather = data.list[0]

            // Меняем иконку погоды
            weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`

            // Меняем название погоды
            weatherName.innerText = currentWeather.weather[0].main

            // Меняем температуру
            weatherTemp.innerText = Math.round(currentWeather.main.temp) + ' °C'

            // Меняем скорость ветра
            windSpeed.innerText = currentWeather.wind.speed + ' m/s'


            // Прогноз на след дни
            for (let i = 8; i < data.list.length; i+=8) {
                console.log(data.list[i])

                const futureWeatherClone = futureWeatherTemplate.content.cloneNode(true)
                const futureWeather = futureWeatherClone.getElementById('futureWeather')
            
                // Меняем дату и время
                const futureDate = futureWeatherClone.getElementById('futureDate')
                const futureTime = futureWeatherClone.getElementById('futureTime')
                const futureDateAndTime = data.list[i].dt_txt.split(' ')
                futureDate.innerText = futureDateAndTime[0]
                futureTime.innerText = futureDateAndTime[1]

                // Меняем иконку погоды
                const futureWeatherIcon = futureWeatherClone.getElementById('futureWeatherIcon')
                futureWeatherIcon.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`

                // Меняем температуру
                const futureWeatherTemp = futureWeatherClone.getElementById('futureWeatherTemp')
                futureWeatherTemp.innerText = Math.round(data.list[i].main.temp) + ' °C'

                futureWeatherContainer.appendChild(futureWeather)
            }
        }
        else {
            if(data?.message) {
                toastBody.innerText = data.message
            }
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
            toastBootstrap.show()
        }

        spinnerOverlay.classList.add('hidden')
    }
}

function getTimeByOffset(offsetInSeconds) {
    const offsetInMilliseconds = offsetInSeconds * 1000;

    const utcDate = new Date(Date.now() + offsetInMilliseconds);
    
    const hours = String(utcDate.getUTCHours()).padStart(2, '0');
    const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(utcDate.getUTCSeconds()).padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }