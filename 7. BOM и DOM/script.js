// BOM
// console.log(location)
// location.reload()
// location.replace('https://google.com')

// console.log(navigator)

// console.log(history)
// history.forward()

// console.log(screen)

// DOM = Document Object Model

// querySelector и querySelectorAll
// const h1Tag = document.querySelector('h1')
// const h1Tag2 = document.querySelector('#h1Tag2')
// const h1Tags = document.querySelectorAll('h1')
// console.log(h1Tag)
// console.log(h1Tag2)
// console.log(h1Tags)

// getElementById
// const h1Tag2 = document.getElementById('h1Tag2')
// console.log(h1Tag2)

// getElementsByClassName
// const paragraphs = document.querySelectorAll('.text')
// const paragraphs = document.getElementsByClassName('text')
// console.log(paragraphs)

// getElementsByName
// const tags = document.getElementsByName('language')
// console.log(tags)

// getElementsByTagName

// innerText
// const h1Tag2 = document.querySelector('#h1Tag2')
// h1Tag2.innerText = 'Typescript'
// console.log(h1Tag2.innerText)


// ЗАДАНИЕ 2
// const liTags = document.querySelectorAll('#list li')
// liTags.forEach(tag => {
//     console.log(tag.innerText)
// })

// liTags.forEach((tag, index) => {
//     tag.innerText = index
// })


// remove() -> удалить html элемент
// const ulTag = document.querySelector('#list')
// ulTag.remove()
// console.log(ulTag)

// ЗАДАНИЕ 3
// const removeTags = document.querySelectorAll('.forRemove')
// removeTags.forEach(tag => tag.remove())


// СОЗДАТЬ ЭЛЕМЕНТЫ DOM
// const container = document.getElementById('container')
// const h1Tag = document.createElement('h1')

// h1Tag.innerText = '<i>Hello</i>' // добавляет все в виде строки
// h1Tag.innerHTML = '<i>Hello</i><p>Bye</p>' // способен преобразить строку в тэг

// container.appendChild(h1Tag)

// const list = document.querySelector('#list')

// // for(let i = 0; i < 5; i++) {
// //     const liTag = document.createElement('li') // <li></li>
// //     liTag.innerText = `Текст ${i}` // <li>Текст 1</li>
// //     list.appendChild(liTag) // <ul><li>Текст 0</li><li>Текст 1</li></ul>
// // }

// const liTags = []
// for(let i = 0; i < 5; i++) {
//     const liTag = document.createElement('li')
//     liTag.innerText = `Текст ${i}`
//     liTags.push(liTag)
// }
// console.log(liTags)
// list.append(...liTags) // позволяет добавлять несколько дочерних элементов
// // list.append(...[li, li, li, li, li]) => list.append(li, li, li, li, li)


// const pTag = document.createElement('p')
// pTag.innerText = 'MyFreedom'
// pTag.style.color = 'green'
// pTag.style.fontWeight = 'bold'
// pTag.style.fontSize = '20px'
// document.body.appendChild(pTag)
// console.log(pTag)


// ЗАДАНИЕ 4
// const pTag = document.createElement('p')
// pTag.innerText = 'Some text'
// pTag.style.fontSize = '36px'
// pTag.style.fontWeight = 'bold'
// document.body.appendChild(pTag)

// ЗАДАНИЕ 5
// function tagGenerator(tagName, color, text) {
//     const newTag = document.createElement(tagName)
//     newTag.style.color = color
//     newTag.innerText = text

//     return newTag
// }

// const tag1 = tagGenerator('a', 'pink', 'Ссылка')
// const tag2 = tagGenerator('h2', 'red', 'Заголовок 2')
// const tag3 = tagGenerator('div', 'yellow', 'Div')

// console.log(tag1)
// console.log(tag2)
// console.log(tag3)

// document.body.append(tag1, tag2, tag3)

// ЗАДАНИЕ 6
// const selectTag = document.getElementById('selectTag')
// for(let i = 1960; i <= 2020; i++) {
//     const optionTag = document.createElement('option')
//     optionTag.innerText = i
//     optionTag.value = i
//     selectTag.appendChild(optionTag)
// }

// ЗАДАНИЕ 7
// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// const ulTag = document.getElementById('ulTag')
// clients.forEach((client) => {
//     const liTag = document.createElement('li')
//     liTag.innerText = `Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`
//     ulTag.appendChild(liTag)
// })

// ЗАДАНИЕ 8
// const linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// const divTag = document.createElement('div')
// divTag.style.backgroundColor = 'lightGrey'
// divTag.style.padding = '15px'

// linksArr.forEach((link) => {
//     const aTag = document.createElement('a')
//     aTag.href = link
//     aTag.innerText = link
//     aTag.target = '_blank'
//     aTag.style.display = 'block'
//     // aTag.setAttribute('target', '_blank')
//     divTag.appendChild(aTag)
// })

// document.body.appendChild(divTag)

// ЗАДАНИЕ 9
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
//     {name:'Den', age: 43}
// ]

// const tBody = document.getElementById('tBody')
// users.forEach((user) => {
//     const tr = document.createElement('tr')

//     const td1 = document.createElement('td')
//     td1.innerText = user.name
//     td1.style.color = 'red'

//     const td2 = document.createElement('td')
//     td2.innerText = user.age
//     td2.style.color = 'blue'

//     tr.append(td1, td2)
//     tBody.appendChild(tr)
// })


// КЛАССЫ в JS
// const button = document.getElementById('button')
// const button2 = document.getElementById('button2')
const toggleButton = document.getElementById('toggleButton')
const text = document.getElementById('text')

// button.onclick = function() {
//     text.classList.add('hidden')
// }

// button2.onclick = function() {
//     text.classList.remove('hidden')
// }

toggleButton.onclick = () => {
    text.classList.toggle('hidden')
    if (text.classList.contains('hidden')) {
        toggleButton.innerText = 'Показать'
    }
    else {
        toggleButton.innerText = 'Скрыть'
    }
}