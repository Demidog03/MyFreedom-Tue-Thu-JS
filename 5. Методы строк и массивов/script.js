// СТРЕЛОЧНЫЕ ФУНКЦИИ
// const sayHello = () => {
//     console.log('Hello!')
// }

// sayHello = 5

// sayHello()

// const sum = (num1, num2) => {
//     return num1 + num2
// }

// // const sum = (num1, num2) => num1 + num2

// const result1 = sum(1, 1) // const result1 = 2

// console.log(result1)


// function adding (num1,num2) {
//     if(arguments.length!=2){
//         console.log("enter two numbers")
//         return
//     }
//     if(typeof num1 !== "number" || typeof num2 !== "number"){
//         console.log("You must enter numbers")
//         return
//     }
//     console.log(num1+num2)
// }
// adding(7,'9')


 
// FOR EACH
// const numbers = [2, 5, 74, 32, 26, 32, 5]

// for (const element of numbers) {
//     if(element === 32) {
//         break; // остановить цикл
//     }
//     console.log(element)
// }

// numbers.forEach((element, index) => {
//     if(element === 32) {
//         // break; // нельзя остановить цикл forEach
//         return; // можно пропустить какую то итерацию
//     }
//     console.log(`${index}: ${element}`)
// })


// MAP
// const names = ['Kalizhan', 'Alexey', 'temirlan', 'Dauren', 'Daniyar']
// const namesClone = names.map((element) => {
//     if (element === 'temirlan') {
//         return {
//             name: 'Temirlan',
//             status: 'student'
//         }
//     }
//     if (element === 'Daniyar') {
//         return {
//             name: 'Daniar',
//             status: 'student'
//         }
//     }
//     if (element === 'Alexey') {
//         return null
//     }
//     return {
//         name: element,
//         status: 'student'
//     }
// }) // map => return []

// console.log(names)
// console.log(namesClone)


// ЗАДАНИЕ 4
// const numbers = [2, 43, 1, 67, 8, 4]
// numbers.push(90) // добавить в конец массива
// numbers.push(46) // добавить в конец массива
// numbers.pop() // удаление с конца массива
// numbers.pop() // удаление с конца массива

// // function copyArr(arr) {
// //     const newArr = []
// //     arr.forEach((element) => {
// //         newArr.push(element)
// //     })
// //     return newArr
// // }

// function copyArr(arr) {
//     return arr.map(element => element)
// }

// const newNumbers = copyArr(numbers)
// console.log(numbers)
// console.log(newNumbers)


// ЗАДАНИЕ 5
// const names = ['Adiya', 'Tomiris', 'Nurlan', 'Suleymen']
// const names2 = ['Temiral', 'Danyar', 'Kalizhan']
// function copyArr(arr) {
//     return arr.map(element => `Hello, ${element}`)
// }

// console.log(copyArr(names))
// console.log(copyArr(names2))


// Задание 6
// const users = [
//     { name: "Alice", age: 25, gender: "female" },
//     { name: "Bob", age: 30, gender: "male" },
//     { name: "Charlie", age: 35, gender: "male" },
//     { name: "Diana", age: 28, gender: "female" },
//     { name: "Eve", age: 22, gender: "female" },
//   ];

 
// function getUserNames(arr) {
//     return arr.map(element => element.name)
// }

// console.log(getUserNames(users))\


// ЗАДАНИЕ 7
// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }

// function sumObjectValues(object) {
//     let sum = 0
//     for (const key in object) {
//         if (typeof object[key] === 'number') {
//             sum += object[key]
//         }
//     }
    
//     return sum
// }

// const numbers = [2, 53, 52, 662]
// for (const index in numbers) {
//     console.log(index)
// }
// for (const element of numbers) {
//     console.log(element)
// }

// console.log(sumObjectValues(objectWithNumbers))


// toUpperCase(), toLowerCase()
// const name = new String('Olzhas Otep') // 'Olzhas'
// console.log(name)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// console.log(name[3])
// console.log(name.length)

// console.log(name.split(' '))

// const names = ['Temirlan', 'Konstantin', 'Sayat', 'Adiya']
// console.log(names.join(', '))

// const address = 'Kazakhstan, Mangilik el 23, 5-apartment'
// console.log(address.split(', '))

// const speciality = 'qweFrontend Developer Junior'
// console.log(speciality.slice(3, 21).toUpperCase())
// console.log(speciality.slice(3, 11))
// console.log(speciality.slice(0, -3)) // до конца строки вырезаем


// console.log(names.slice(0, 2))
// console.log(names.splice(0, 2)) // мутирует оригинальный массив ОСТОРОЖНО!
// console.log(names)

// ЗАДАНИЕ 8 
// javascript -> Javascript
// function ucFirst(str) {
//     // const firstUppercaseLetter = str[0].toUpperCase()
//     // const slicedStr = str.slice(1) 
//     // return firstUppercaseLetter + slicedStr // 'J' + 'avascript'
    
//     return str[0].toUpperCase() + str.slice(1) 
// }

// console.log(ucFirst('javascript'))
  
// ЗАДАНИЕ 9
// Hello, BadWord
// Hello, bAdWOrd
// Hello, badword
// Hello, BADWORD

// Hello, XXX
// Hello, XxX
// Hello, xxx
// Hello, xXx

// Hello, BadWord
// hello, badword -> badword

// function checkSpam(str) {
//     const lowercaseText = str.toLowerCase()
//     return lowercaseText.includes('badword') || lowercaseText.includes('xxx')
// }

// function checkSpam(str) {
//     const lowercaseText = str.toUpperCase()
//     return lowercaseText.includes('BADWORD') || lowercaseText.includes('XXX')
// }

// console.log(checkSpam('Hello, xXx'))


// reverse -> Работает только с массивами
// const numbers = [0, 1, 2, 3, 4]
// const reversedNumbers = numbers.reverse()
// console.log(reversedNumbers)

// const text = 'Hello, Olzhas'
// console.log(text.split(''))

// reverse()
// split()
// join()

// ЗАДАНИЕ 10

// function reverseStr(str) {
//     return str.split('').reverse().join('')
// }

// function reverseStr(str) {
//     let reversedStr = ''

//     for (let i = str.length - 1; i >= 0; i--) { // обратный цикл
//         reversedStr += str[i]
//     }

//     console.log(reversedStr)
// }

// reverseStr('привет, Женя')


// ЗАДАНИЕ 11
// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];

// stations.forEach(station => {
//     const code = station.slice(0, 3)
//     const index = station.indexOf(';')
//     const name = station.slice(index + 1)

//     console.log(`${code}: ${name}`)
// })

// stations.forEach(station => {
//     const splittedStation = station.split(';')
//     const code = splittedStation[0].slice(0, 3)
//     const name = splittedStation[1]
    
//     console.log(`${code}: ${name}`)
// })


// ЗАДАНИЕ 12
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]

// function unique(arr) {
//     const uniqueArr = []

//     for (const element of arr) {
//         if (!uniqueArr.includes(element)) {
//             uniqueArr.push(element)
//         }
//     }

//     return uniqueArr
// }

// const arr1 = unique(strings)
// console.log(arr1)


// FILTER
// const numbers = [0, 1, 2, 3, 4]

// numbers.forEach(number => {
//     console.log(number)
// })

// const numbersCopy = numbers.map(number => {
//     if (number >= 2) {
//         return number
//     }
// })

// console.log(numbers)
// console.log(numbersCopy)

// const filteredNumbers = numbers.filter(number => number >= 2)

// console.log(filteredNumbers)

// ЗАДАНИЕ 14
// let arr = [5, 4, 3, 8, 0]

// function filterFor(arr, a) {
//     return arr.filter(number => number >= a)
// }

// const arr1 = filterFor(arr, 5)
// const arr2 = filterFor(arr, 10)
// const arr3 = filterFor(arr, 3.11)

// console.log(arr1, arr2, arr3)


// ЗАДАНИЕ 15
// function filterArr(arr) {
//     return arr.filter(element => element.length > 3)
// }

// console.log(filterArr(['yes', 'hello', 'no', 'easycode', 'what']))


// SORT

// const numbers = [2, 54, 23, 8, 43, -34, 38]
// const sortedNumbers = numbers.sort((a, b) => {
//     if (a < b) {
//         return 1 // текущий элемент идет по индексу вперед
//     }
//     if (a > b) {
//         return -1 // текущий элемент идет по индексу назад
//     }
//     return 0
// })
// console.log(sortedNumbers)

// const names = ['Olzhas', 'Adiya', 'Temirlan', 'Daniar', 'Aleksey']
// const sortedNames = names.sort((a, b) => {
//     if (a < b) {
//         return 1 // текущий элемент идет по индексу вперед
//     }
//     if (a > b) {
//         return -1 // текущий элемент идет по индексу назад
//     }
//     return 0
// })
// console.log(sortedNames)


// ЗАДАНИЕ 16
// const arr = [[14, 45], [1], ['a', 'c', 'd']]
// const sortedArr = arr.sort((a, b) => {
//     if(a.length > b.length) {
//         return 1
//     }
//     if (a.length < b.length) {
//         return -1
//     }
//     return 0
// })

// console.log(sortedArr)


// const numbers = [0, 1, 2, 3, 4]
// let sum = 0
// for (const number of numbers) {
//     sum += number
// }
// console.log(sum)

// const sum = numbers.reduce((accumulator, currentElement) => {
//     return accumulator + currentElement
// }, 0)

// console.log(sum)


// Reduce

// ЗАДАНИЕ 17
// function getAverageHumanAge(ages) {
//     // 1
//     const humanAges = ages.map(age => age <= 2 ? age * 10 : age * 7)

//     // 2
//     const filteredAges = humanAges.filter(age => age >= 18)
    
//     // 3
//     const sum = filteredAges.reduce((accumulator, age) => {
//         return accumulator + age
//     }, 0)
//     return sum / filteredAges.length
// }

// console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]))
// console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]))


