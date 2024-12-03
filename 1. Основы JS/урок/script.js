// console.log('ПРИВЕТ') // -> для вывода информации

// ЗАКОММЕНТИРОВАТЬ НЕСКОЛЬКО СТРОК
/*
ПРИВЕТ
ПОКА
*/

// var, let, const

// VAR

/*
var name // declaration - создание переменной
name = "Olzhas" // initialization - присвание значения
console.log(name)

var age = 21 // declaration + initialization
console.log(age)
*/

// LET
// let speciality = "Frontend разработчик"
// console.log(speciality)
// speciality = 'Backend разработчик'
// console.log(speciality)


// CONST
// const university = "Astana IT University"
// console.log("JS РАБОТАЙ(")
// university = "ENU"
// console.log(university)

// Рекомендация: Создавать впервую очередь переменную через const, потом если переменная будет меняться меняем const на let


// ТИПЫ ДАННЫХ
// string - строка ("Привет")
// number - цифра (5)
// boolean - булевое (true/false)
// null - нул
// undefined - неопределенность
// object - обьект
// symbol - символ


// STRING - строка

// camelCase
// const myFavouriteCoffee = "Капучино с соленой карамелью"
// const myFavouriteCoffee = 'Капучино с соленой карамелью'
// const myFavouriteCoffee = `Капучино с соленой карамелью`

// const my_favourite_coffee = "Капучино с соленой карамелью" (snake_case - PHP)


// NUMBER
// const screenSize = 15.6
// console.log(screenSize)

// BOOLEAN
// const isMale = true
// const isFemale = false
// console.log(isMale, isFemale)


// UNDEFINED
// let color = undefined
// console.log(color)

// NULL
// const secondName = null
// console.log(secondName)

// OBJECT
// const model = 'Acer nitro 5'
// const screenSize = 15.6
// const ssdSize = '512gb'
// const gpu = 'RTX 3070ti'

// const model2 = 'Lenovo legion 6'
// const screenSize2 = 16
// const ssdSize2 = '1TB'
// const gpu2 = 'RTX 4060'

// const laptop1 = {
//     model: 'Acer nitro 5',
//     screenSize: 15.6,
//     ssdSize: '512gb',
//     gpu: 'RTX 3070ti'
// }

// const laptop2 = {
//     model: 'Lenovo legion 6',
//     screenSize: 16,
//     ssdSize: '1TB',
//     gpu: 'RTX 4060'
// }

// console.log(laptop1)
// console.log(laptop2)


// АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 * 5)
// console.log(10 / 5)

// console.log((10 + 2) * 5)

// console.log(4 % 2)
// console.log(4 % 3)

// console.log(4 ** 3)

// const num1 = 10
// const num2 = 5
// console.log(num1 + num2)


// КОНКАТЕНАЦИЯ СТРОК
// console.log('Привет' + ' ' + 'Алексей')
// console.log("10" + 10)
// console.log(5 + "5")

// const name1 = 'Сулеймен'
// const name2 = 'Константин'
// const name3 = 'Саят'
// const bdayMessage = ', с днем рождения! Желаю счастья, здоровья, благополучия и семейного благосостояния!!!'

// console.log(name1 + bdayMessage)
// console.log(name2 + bdayMessage)
// console.log(name3 + bdayMessage)

// const name1 = 'Темирлан'
// console.log('Добрый вечер уважаемый ' + name1 + '. Приглашаю вас на корпоратив в 20:00!')
// console.log(`Добрый вечер уважаемый ${name1}. Приглашаю вас на корпоратив в 20:00!`)


// PROMPT, ALERT, CONFIRM

// ALERT
// console.log('ПРИВЕТ!')
// alert('ПРИВЕТ!')


// PROMPT
// const name = prompt('Введите ваше имя:')
// console.log(name)

// const age = prompt('Ваш возраст: ')
// console.log(+age)
// console.log(Number(age))
// console.log(+'sdfdsfdsfdws') // NaN -> Not a Number


// CONFIRM
// const answer1 = confirm('Вы гражданин Казахстана?')
// console.log(answer1)

// alert('ПРИВЕТ') // не работает через node


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 > 5)
// console.log(5 < 2)
// console.log(10 == 10)
// console.log(10 != 10)
// console.log(10 >= 10)
// console.log(11 >= 10)

// console.log("10" == 10)
// console.log("10" === 10)

// ОПЕРАТОРЫ && / || -> И / ИЛИ
// React или Angular (||)

// console.log(true || false) // true
// console.log(false || true) // true
// console.log(true || true) // true
// console.log(false || false) // false

// больше 3 лет стажа, а также чтобы он был Фронтендер
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false
// console.log(true && true) // true


// УСЛОВИЯ - if, else
// const age = +prompt('Сколько вам лет?')

// if (age >= 21 && age <= 120) { // if (true) (20 - 120)
//     alert('Вы можете покупать сигареты!')
// }
// else if(isNaN(age) || age < 0 || age > 120) {
//     alert('Пожалуйста введите корректные данные')
// }
// else {
//     alert('Вам нельзя покупать сигареты(')
// }


// ЗАДАНИЕ 1
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: 
// Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)


// const name = prompt('Введите ваше имя:')
// // alert('Привет, ' + name + '!')
// alert(`Привет, ${name}!`)


// Задание 2
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

// const num = +prompt('Введите число:')
// const power = +prompt('Введите степень числа:')
// console.log(num ** power)


// let num = 30
// num = num + 1 // 30 + 1
// num += 1
// num++

// let num2 = 40
// num2 = num2 + 5
// num2 += 5

// ЗАДАНИЕ 4
// let text = "some text"
// if(text === 'some text') { // 'some text' === 'some text'
//     text = 'another text'
// }
// else {
//     text = 'some text'
// }

// console.log(text)


// ЗАДАНИЕ 5
// let num = 2
// if (num === 0) { // 2 === 0
//     num = 1
// }
// else if (num < 0) { // 2 < 0
//     num = "less than zero"
// }
// else if (num > 0) { // 2 > 0
//     // num = num * 10
//     num *= 10
// }

// console.log(num)

// const name = prompt('Введите ваше имя:')

// ЗАДАНИЕ 6

// const num = +prompt('Введите число:') // '45' => 45
// let result

// if(num < 5) { // 7 < 5
//     result = '0'
// }
// else {
//     result = '1'
// }

// console.log('Result: ' + result)


// ЗАДАНИЕ 7
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')

// if(num1 > num2) {
//     console.log(`Большее число: ${num1}`)
// }
// else if (num2 > num1) {
//     console.log(`Большее число: ${num2}`)
// }
// else {
//     console.log('Числа равны')
// }

// ЗАДАНИЕ 8
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')

// if (num1 % num2 === 0) {
//     console.log(`Число ${num1} кратная к числу ${num2}`)
// }
// else {
//     console.log(`Число ${num1} не кратная к числу ${num2}`)
// }


// ЗАДАНИЕ 9
// const mark = +prompt('Введите ваш средний балл от 1 до 10:')

// if(mark >= 1 && mark <= 4) {
//     console.log('Двоечник, иди учись!')
// }
// else if (mark >= 5 && mark <= 8) {
//     console.log('Неплохо, но давай еще поднажмем!')
// }
// else if(mark >= 9 && mark <= 10) {
//     console.log('Ого, да ты настоящий отличник!')
// }
// else {
//     console.log('Некорректные данные. Пожалуйста введите число от 1 до 10')
// }


// ЗАДАНИЕ 10
// const exam = +prompt('Введите балл за экзамен (от 0 до 100):')
// const projects = +prompt('Введите количество выполненных проектов (от 0 и больше):')

// let result
// if (exam > 90 || projects > 10) {
//     result = 100
// }
// else if (exam > 75 && projects >= 5) {
//     result = 90
// }
// else if (exam > 50 && projects >= 2) {
//     result = 75
// }
// else {
//     result = 0
// }

// console.log(`Итоговая оценка: ${result}`)


// ЗАДАНИЕ 11
// const rentDays = +prompt('На сколько дней вы арендуете машину?')
// let sum = rentDays * 40

// if (rentDays >= 7) {
//     sum -= 50
// }
// else if (rentDays >= 3) {
//     sum -= 20
// }

// console.log(`Общая сумма аренды составила ${sum}$`)


const rentalDays = prompt("На сколько дней вы хотите арендовать автомобиль?");
const dailyRate = 40; 
let discount = 0;
if (rentalDays >= 7) {
  discount = 50; 
}
else if (rentalDays >= 3) {
  discount = 20; 
}
const totalCost = rentalDays * dailyRate - discount;
console.log(`Общая стоимость аренды: $${totalCost}`);