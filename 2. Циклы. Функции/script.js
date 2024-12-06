// ТЕРНАРНЫЙ ОПЕРАТОР

// const money = +prompt('Сколько у вас денег?')
// const phonePrice = 300000
// if (money < phonePrice) {
//     console.log('Не хватает средств для покупки телефона.')
// }
// else {
//     console.log('У вас хватает средств для покупки телефона.')
// }

// //1
// money < phonePrice ? console.log('Не хватает средств для покупки телефона.') : console.log('У вас хватает средств для покупки телефона.')

//2
// console.log(money < phonePrice ? 'Не хватает средств для покупки телефона.' : 'У вас хватает средств для покупки телефона.')


// ЗАДАНИЕ 1
// const country = 'Kazakshtan'
// const access = country === 'Sweden' ? true : false
// console.log(access)

// debug - тестирование и проверка кода


// ЦИКЛЫ

// for, while, do while


// DRY - Dont Repeat Yourself

// for (let num = 100; num > 0; num--) {
//     console.log('Поздравляю вас с Новым Годом!')
// }

// let num = 1;

// for (let i = 0; i < 6; i++){
//     // 10 < 10
//     // Счетчик: 6
//     num++
//     console.log(num);
// }

// Задание 3
// 1. Создать цикл который работает 5 раз
// 2. Внутри цикла нужно сделать prompt и сохранить ответ в переменной
// 3. if else

// for (let i = 0; i < 10; i += 2) {
//     const num = +prompt(`введите число`)
//     num === 10 ? console.log('равно 10') : console.log('не равно 10')
// }

// 0, 2, 4, 6, 8
// for (let i = 0; i <= 8; i += 2) {
//     const num = +prompt('Введите число:')
//     // if(num === 10) { // 10 === 10
//     //     console.log('Равно 10')
//     // }
//     // else {
//     //     console.log('Не равно 10')
//     // }
//     console.log(num === 10 ? 'Равно 10' : 'Не равно 10')
// }


// while
// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++
// }

// do while
// let i = 10;
// do {
//     console.log(i)
//     i++
// } while (i < 10)


// FUNCTION

// const name = "Olzhas"
// const age = 21
// const speciality = "Frontend Developer"
// const email = 'olzhas@gmail.com'
// const gender = 'male'
// const isMarried = false

// console.log(`Имя: ${name}`)
// console.log(`Возраст: ${age}`)
// console.log(`Должность: ${speciality}`)
// console.log(`Почта: ${email}`)
// if (gender === 'male') {
//     console.log(`Пол: мужчина`)
//     console.log(isMarried ? 'Женат' : 'Не женат')
// }
// else if (gender === 'female') {
//     console.log('Пол: женщина')
//     console.log(isMarried ? 'Замужем' : 'Не замужем')
// }

// console.log('------------------------')

// const name2 = "Aigul"
// const age2 = 24
// const speciality2 = "Backend Developer"
// const email2 = 'aigul@gmail.com'
// const gender2 = 'female'
// const isMarried2 = true

// console.log(`Имя: ${name2}`)
// console.log(`Возраст: ${age2}`)
// console.log(`Должность: ${speciality2}`)
// console.log(`Почта: ${email2}`)
// if (gender2 === 'male') {
//     console.log(`Пол: мужчина`)
//     console.log(isMarried2 ? 'Женат' : 'Не женат')
// }
// else if (gender2 === 'female') {
//     console.log('Пол: женщина')
//     console.log(isMarried2 ? 'Замужем' : 'Не замужем')
// }



// function showPersonInfo(name, age, speciality, email, gender, isMarried) { // параметры - аргументы
//     console.log(`Имя: ${name}`)
//     console.log(`Возраст: ${age}`)
//     console.log(`Должность: ${speciality}`)
//     console.log(`Почта: ${email}`)
//     if (gender === 'male') {
//         console.log(`Пол: мужчина`)
//         console.log(isMarried ? 'Женат' : 'Не женат')
//     }
//     else if (gender === 'female') {
//         console.log('Пол: женщина')
//         console.log(isMarried ? 'Замужем' : 'Не замужем')
//     }
// }
// showPersonInfo('Olzhas', 21, 'Frontend Developer', 'olzhas@gmail.com', 'male', false)
// console.log('------------------')
// showPersonInfo('Aigul', 24, 'Backend Developer', 'aigul@gmail.com', 'female', true)

// const showPersonInfo = (name) => {
//     console.log(`Имя: ${name}`)
// }

// const showPersonInfo = function(name) {
//     console.log(`Имя: ${name}`)
// }



// Функция для суммирования чисел
// function sum(num1, num2) {
//     return num1 + num2
// }
// const result1 = sum(1, 4)
// const result2 = sum(2, 8)
// const result3 = sum(4, 5)

// console.log(result1, result2, result3)


// ЗАДАНИЕ ОТ ОЛЖАСА
// Создать функцию которая проверяет кратность
// первого числа на вторую

// 4 % 2 => 0

function isMultiple(num1, num2) {
    if (num1 % num2 === 0) {
        console.log('Числа кратны')
    }
    else {
        console.log('Числа не кратны')
    }
}


isMultiple(4, 2)
isMultiple(3, 2)