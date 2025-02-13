// var message = 'Hello'

// if(true) {
//     var message = 'Hello 2'
// }

// console.log(message) // Hello


// Область видимости - block-scoped
// let message = 'Hello'

// if(true) { // блок
//     let message = 'Hello 2'
//     console.log(message) // Hello 2
// }

// for (let i = 0; i < 1; i++) { // блок
//     let message = 'Hello 3'
//     console.log(message)

//     if (true) {
//         let message = 'Hello 4'
//         console.log(message)
//     }
// }

// console.log(message) // Hello


// function sayHello() {
//     const text = 'Hello'
//     console.log(text)
// }

// sayHello()

// console.log(text)


// Замыкание - closure
// Достигается с помощью функции внутри функции

// function increaseCount() { // функция фабрика
//     let numCounter = 0
   
//     return function() {
//         numCounter++
//         return numCounter
//     }
// }

// const increaseCountFunction = increaseCount() 
// // increaseCount -> function() {
// //     numCounter++
// //     return numCounter
// // }

// console.log(increaseCountFunction()) // 1
// console.log(increaseCountFunction()) // 2
// console.log(increaseCountFunction()) // 3
// console.log(increaseCountFunction()) // 4
// console.log(increaseCountFunction()) // 5
// console.log(increaseCountFunction()) // 6


