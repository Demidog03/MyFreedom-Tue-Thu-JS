// // && - Оператор И
// // Бонус: создать фукнцию которая проверяет
// // число в диапазоне

// const n = -20

// // 101 >= 0 && 101 <= 100 -> true && false -> false
// // -2 >= 0 && -2 <= 100 -> false && true -> false
// // 20 >= 0 && 20 <= 100 -> true && true -> true

// // if (n >= 0 && n <= 100) { // от 0 до 100 (включительно)
// //     console.log('Переменна n входит в диапазон от 0 до 100')
// // }
// // else {
// //     console.log('Переменна n не входит в диапазон от 0 до 100')
// // }

// function isInInterval(num) {
//     return num >= 0 && num <= 100
// }

// // console.log(true)
// console.log(isInInterval(20)) // true
// console.log(isInInterval(90))

// const result1 = isInInterval(120) // const result1 = false
// const result2 = isInInterval(n) // conta result2 = false

// if (result1) {
//     console.log('Переменная входит в диапазон')
// }
// else {
//     console.log('Переменная не входит в диапазон')
// }

// if(result2) {
//     alert('Входит в диапазон 0-100')
// }
// else {
//     alert('Не входит в диапазон 0-100')
// }

// const name = 'iPhone 16'
// const storage = 256
// const isNew = true
// const color = 'Розовый'

// const name2 = 'Samsung Galaxy s24 ultra'
// const storage2 = 512
// const isNew2 = false
// const color2 = 'Черный'

// key: value -> ключ: значение
// field: value -> поле: значение
// parameter: value -> свойство: значение
// const phone1 = {
//   name: "iPhone 16",
//   storage: 256,
//   isNew: true,
//   color: "Розовый",
//   showInfo: function () {
//     showPhoneInfo(phone1);
//   }, // метод обьекта
//   getName: function () {
//     console.log("Название телефона: " + phone1.name);
//   },
// };

// const phone2 = {
//   name: "Samsung Galaxy s24 ultra",
//   storage: 512,
//   isNew: false,
//   color: "Черный",
//   showInfo: function () {
//     showPhoneInfo(phone2);
//   },
//   getName: function () {
//     console.log("Название телефона: " + phone2.name);
//   },
// };

// console.log('Phone1:', phone1)
// console.log('Phone2:', phone2)

// console.log(phone1)
// phone1.name = 'iPhone 16 pro'
// phone1.name = 'iPhone 16 pro max'

// Опустошить значение поля
// phone1.storage = null
// console.log(phone1)

// Удалить вообще все поле с значением
// delete phone1.storage
// console.log(phone1)

// Добавить новое поле
// phone1.ram = 12
// console.log(phone1)

// function showPhoneInfo(object) { // не метод -> функция
//     console.log('Название: ' + object.name)
//     console.log('Внутренняя память: ' + object.storage)
//     console.log('Цвет: ' + object.color)
//     console.log('Состояние: ' + (object.isNew ? 'Новое' : 'Б/У'))
// }

// // showPhoneInfo(phone2)

// showPhoneInfo(phone1) // функция
// phone1.showInfo() // метод

// showPhoneInfo(phone2) // функция
// phone2.showInfo() // метод

// phone2.getName()

// console.log = function (){
//     alert('Консоль лог не работает так что на тебе алерт')
// }
// console.log(console)

// FOR-IN

// console.log(phone1.name)
// console.log(phone1["name"])

// for (const key in phone1) {
//     console.log(key, phone1[key]) // phone1["isNew"]
// }

// typeof
// console.log(typeof true)

// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// };

// for (const key in engineers) {
//   console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`);
// }

// const phone1 = {
//   'model': 'Iphone 15',
//   'price': 450000,
//   'isSold': true,
// }

// phone1.color = 'red'
// console.log(phone1)


// for (const key in phone1) {
//   console.log(phone1[key]) // phone1['isSold']
// }

// console.log(phone1['price'])


// ARRAY (Массивы)
// const phones = ['Iphone 15', 'Samsung s24', 'Google pixel', 'Oppo', 'Vivo', 'Honor', 'Xiaomi']
// const prices = [450000, 230000, 170000, 120000]

// console.log(phones[4])
// console.log(phones.length)

// FOR (array)
// for(let i = 0; i < prices.length; i++) {
//   console.log(prices[i]) // iphone[3]
// }

// for(let i = 0; i <= phones.length - 1; i++) {
//   console.log(phones[i]) // iphone[3]
// }


// ЗАДАНИЕ 3
// const numbers = [4, 35, 67, 8, 32, 76]
// for(let i = 1; i < numbers.length; i+=2) {
//   console.log(numbers[i]) // numbers[5]
// }

// ЗАДАНИЕ 4
// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }

// for (const index in numbers) {
//   console.log(`Индексу ${index} соответствует число ${numbers[index]}`)
// }


// FOR OF
// const numbers = [4, 35, 67, 8, 32, 76]
// for (const element of numbers) {
//   console.log(element)
// }
// for (const index in numbers) {
//   console.log(index)
// }

// const questions = [ 
//   { 
//     question: "What's the currency of the USA?", 
//     choices: ["US dollar", "Ruble", "Horses", "Gold"], 
//     corAnswer: 0 
//   },
//   { 
//     question: "Where was the American Declaration of Independence signed?", 
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"], 
//     corAnswer: 0 
//   },
//   { 
//     question: "Where was the American Declaration of Independence signed?", 
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"], 
//     corAnswer: 0 
//   },
//   { 
//     question: "Where was the American Declaration of Independence signed?", 
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"], 
//     corAnswer: 0 
//   }
// ];

// // const question = [#43242, #14343, #87686, #09678]

// for (const question of questions) {
//   question.userAnswer = null
// }

// questions[1].userAnswer = false

// console.log(questions)



// Методы PUSH, POP, UNSHIFT, SHIFT
// const names = ['Olzhas', 'Suleymen', 'Kalizhan', 'Temirlan']
// names.push('Dauren') // добавляет в конец массива новый элемент
// names.push('Konstantin', 'Alexey')
// names.pop() // удаляет последний элемент
// names.pop()
// names.pop()
// console.log(names)

// names.unshift('Tomiris')
// names.unshift('Adiya', 'Nurgisa')
// names.shift()
// names.shift()
// names.shift()
// console.log(names)


// ЗАДАНИЕ 7
// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const newArr = []

// for (const element of arr) {
//   if (element > 0) {
//     newArr.push(element)
//   }
// }

// console.log(newArr)

