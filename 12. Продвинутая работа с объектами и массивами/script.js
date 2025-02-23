// const student = {
//     name: 'Temirlan',
//     course: 'Frontend',
// }

// 1
// console.log(student.name)
// console.log(student.course)

// 2
// console.log(student['name'])
// console.log(student['course'])

// 3 - Диструктуризация обьекта
// let {name: firstName, course} = student
// console.log(firstName)
// console.log(course)


// Диструктуризация массива
// const numbers = [1, 2, 3, 4]
// const [num1, num2, num3, num4] = numbers
// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)

// const [num1, num2] = numbers
// console.log(num1)
// console.log(num2)


// ЕСТЬ НЮАНСЫ
// const user = {
//     name: 'Sayat',
//     course: 'Frontend',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana'
//     }
// }

// let {name, address} = user
// name = 'Tomiris'
// address.city = 'Almaty'

// console.log(address)
// console.log(user)
// console.log(name)

// const students = [
//     {
//         name: 'Sayat',
//         course: 'Frontend'
//     },
//     {
//         name: 'Dauren',
//         course: 'Backend'
//     },
//     {
//         name: 'Suleimen',
//         course: 'Testing'
//     }
// ]

// const [student1] = students
// student1.course = 'UI/UX Design'
// console.log(student1)
// console.log(students)

// REST и SPREAD
// ...
const students = [
    {
        name: 'Sayat',
        course: 'Frontend'
    },
    {
        name: 'Dauren',
        course: 'Backend'
    },
    {
        name: 'Suleimen',
        course: 'Testing'
    },
    {
        name: 'Kalizhan',
        course: 'Frontend'
    },
    {
        name: 'Konstantin',
        course: 'ML engineer'
    }
]

// const [student1, student2, student3, student4] = students
// const otherStudents = [student2, student3, student4]
// console.log(student1)
// console.log(otherStudents)

// REST - пишутся перед знаком присваиванием
// const [student1, ...otherStudents] = students
// console.log(student1)
// console.log(otherStudents)

// Копия массива - не является безопасным!
// const [...studentsCopy] = students
// studentsCopy[0].course = 'Backend'
// console.log(studentsCopy)
// console.log(students)

// Самый безопасный способ копирования обьекта или массива
// JSON
// const studentJson = JSON.stringify(students)
// const studentCopy = JSON.parse(studentJson)
// console.log(studentCopy)


// REST в функциях
// function sumAllNumbers(...numbers) {
//     let sum = 0
//     numbers.forEach(num => {
//         sum += num
//     })
//     return sum
// }

// console.log(sumAllNumbers(1, 2, 3, 4, 5, 6))


// SPREAD
// const pc = {
//     cpu: 'Amd Ryzen 7600x',
//     gpu: 'Rtx 4070 super',
//     ram: 32,
// }

// const pcAdditional = {
//     caseColor: 'white',
//     hasPciExpress: true
// }

// const pcExtended = {
//     ...pc,
//     ...pcAdditional,
//     motherboard: 'Asus Tuf b650',
//     ssd: 'Kingston 1tb',
//     ram: 64
// }

// console.log(pcExtended)


// SPREAD с массивами
// const numbers = [1, 2, 3, 4]
// const numbersExtended = [...numbers, 5, 6, 7]

// console.log(numbersExtended)


// REST + SPREAD
// function sumAllNumbers(...numbers) {
//     let sum = 0
//     numbers.forEach(num => {
//         sum += num
//     })
//     return sum
// }

// console.log(sumAllNumbers(1, 2, 3, 4, 5, 6))

// const numbers = [23, 54, 86, 13]
// console.log(sumAllNumbers(...numbers)) // ...[23, 54, 86, 13] => 23, 54, 86, 13 -> похож на параметры

// Базовый пример с append
// const h1 = document.createElement('h1')
// h1.innerText = 'H1'
// const p = document.createElement('p')
// p.innerText = 'Paragraph'

// document.body.appendChild(h1)
// document.body.appendChild(p)

// document.body.append(h1, p)


// append с массивом
// const ul = document.getElementById('ul')

// const liTags = []
// for(let i = 1; i <= 5; i++) {
//     const li = document.createElement('li')
//     li.innerText = `List element ${i}`
//     liTags.push(li)
// }
// console.log(liTags)

// ul.append(...liTags) // spread


// ЗАДАНИЕ 1
// const names = ['Arman', 'Dauren', 'Aibek', 'Altair', 'Erbol'];

// const [name1, name2, ...otherNames] = names

// console.log(name1)
// console.log(name2)

// otherNames.forEach(name => {
//     console.log(name)
// })


// ЗАДАНИЕ 2
// const names = ['Arman', 'Dauren', 'Aibek', 'Altair', 'Erbol']

// function showNames(name1, name2, name3) {
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }

// showNames(...names) // spread
// // (...['Arman', 'Dauren', 'Aibek', 'Altair', 'Erbol'])
// // ('Arman', 'Dauren', 'Aibek', 'Altair', 'Erbol')

// const user = {
//     name: 'Olzhas',
//     age: 21,
//     gender: 'Женщина'
// }

// const {gender = 'Мужчина'} = user
// console.log(gender)


// ЗАДАНИЕ 3
// const user = {
//     firstName: 'Olzhas',
//     lastName: 'Otep',
//     age: 21,
//     gender: 'Мужчина',
// }

// const {firstName = 1, lastName = 2, ...fields} = user

// console.log(firstName)
// console.log(lastName)
// console.log(fields)


// function meanScore(...numbers) {
//     if(numbers.some(num => typeof num !== 'number')) {
//         console.log('Все аргументы в вызове функции должны быть числами!')
//         return
//     }

//     const sum = numbers.reduce((acc, num) => {
//         return acc + num
//     }, 0)
//     const result = (sum / numbers.length).toFixed(2)
//     return result
// }

// console.log(meanScore(4, 5, 9, 11))