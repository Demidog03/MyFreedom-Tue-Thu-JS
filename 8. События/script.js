// function clickButton() {
//     alert('Кнопка была нажата!')
// }

// const clickBtn = document.getElementById('clickBtn')

// 2. Поле onclick
// clickBtn.onclick = clickButton
// clickBtn.onclick = function() {
//     alert('Кнопка была нажата!')
// }

// Метод addEventListener
// 3. addEventListener
// clickBtn.addEventListener('click', (event) => {
//     console.log(event)
//     alert('Кнопка была нажата!')
// })

// :hover = mouseover + mouseleave

// clickBtn.addEventListener('mouseover', () => {
//     console.log('Наведение')
// })

// clickBtn.addEventListener('mouseleave', () => {
//     console.log('Отведение')
// })

// Single Page Application

// const confirmBtn = document.querySelector('#confirmBtn')
// const inputEmail = document.querySelector('#inputEmail')
// const inputPassword = document.querySelector('#inputPassword')
// const form = document.getElementById('form')

// confirmBtn.addEventListener('click', (event) => {
//     event.preventDefault() // предотвратить дефолтное поведение браузера - перезагруки страницы не происходит
//     console.log(inputEmail.value)
//     console.log(inputPassword.value)

//     // очистка инпутов
//     inputEmail.value = ''
//     inputPassword.value = ''
// })

// form.addEventListener('submit', (event) => {
//     event.preventDefault() // предотвратить дефолтное поведение браузера - перезагруки страницы не происходит
//     console.log(inputEmail.value)
//     console.log(inputPassword.value)

//     // очистка инпутов
//     inputEmail.value = ''
//     inputPassword.value = ''
// })

// change, keydown и keyup
// inputEmail.addEventListener('change', () => {
//     console.log(inputEmail.value)
// })

// inputEmail.addEventListener('keydown', () => {
//     console.log(inputEmail.value)
// })

// inputEmail.addEventListener('keyup', (event) => {
//     console.log(event.code)
//     console.log(event.key)
//     console.log(inputEmail.value)
// })


// ЗАДАНИЕ 1
// const inputTag = document.getElementById('inputTag')
// const keyList = document.getElementById('keyList')

// inputTag.addEventListener('keyup', (event) => {
//     const li = document.createElement('li')
//     li.innerText = event.key
//     keyList.appendChild(li)
// })


// ЗАДАНИЕ 2
// const inputTag = document.getElementById('inputTag')

// inputTag.addEventListener('keyup', () => {
//     console.log(inputTag.value)
// })


// ЗАДАНИЕ 3
// const inputTag = document.getElementById('inputTag')
// const confirmBtn = document.getElementById('confirmBtn')
// const ulTag = document.getElementById('ulTag')

// confirmBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     const li = document.createElement('li')
//     li.innerText = inputTag.value
//     ulTag.appendChild(li)
//     inputTag.value = ''
// })

// const firstNumber = document.getElementById('firstNumber');
// const secondNumber = document.getElementById('secondNumber');
// const select = document.getElementById('select');
// const button = document.getElementById('button');
// const resultH2 = document.getElementById('resultH2');
// button.addEventListener('click', (e) => {
//     e.preventDefault()
//     let res;
//     switch (select.value) {
//         case '+':
//             res = Number(firstNumber.value) + Number(secondNumber.value);
//             break;
//         case '-':
//             res = Number(firstNumber.value) - Number(secondNumber.value);
//             break;
//         case '*':
//             res = Number(firstNumber.value) * Number(secondNumber.value);
//             break;
//         case '/':
//             res = Number(firstNumber.value) / Number(secondNumber.value);
//             break;
//         default:
//             resultH2.innerText = "Operation in not correct";
//     }

//     resultH2.innerText = res;
// })


// ЗАДАНИЕ 4
// const number1Input = document.getElementById('number1Input')
// const number2Input = document.getElementById('number2Input')
// const operatorSelect = document.getElementById('operatorSelect')
// const calculateBtn = document.getElementById('calculateBtn')
// const resultDiv = document.getElementById('resultDiv')

// calculateBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     const num1 = +number1Input.value
//     const num2 = +number2Input.value
//     const operator = operatorSelect.value

//     if (Number.isNaN(num1) || Number.isNaN(num2)) {
//         alert('Invalid numbers')
//         return
//     }
    
//     // let result
//     // if (operator === '+') {
//     //     result = num1 + num2
//     // }
//     // else if (operator === '-') {
//     //     result = num1 - num2
//     // }
//     // else if (operator === '/') {
//     //     result = num1 / num2
//     // }
//     // else if (operator === '*') {
//     //     result = num1 * num2
//     // }

//     // switch(operator) {
//     //     case '+':
//     //         result = num1 + num2
//     //         break
//     //     case '-':
//     //         result = num1 - num2
//     //         break
//     //     case '/':
//     //         result = num1 / num2
//     //         break    
//     //     case '*':
//     //         result = num1 * num2
//     //         break
//     //     default:
//     //         alert('Invalid operator')
//     //         return
//     // }

//     const result = eval(`${num1} ${operator} ${num2}`)

//     resultDiv.innerText = `Result: ${result}`
// })