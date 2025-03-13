// OOP - Object oriented programming
// ООП - Обьектно ориентированное программирование

// const student = {
//     name: 'Tomiris',
//     study: function() {
//         console.log(`${this.name} is studying Frontend!`) // this -> student
//     },
//     address: {
//         city: 'Astana',
//         showAddress: function() {
//             console.log(`Adress: ${this.city}`) // this -> address
//         }
//     }
// }

// const student2 = {
//     name: 'Suleimen',
//     study() { // краткая запись создания метода
//         console.log(`${this.name} is studying Frontend!`)
//     }
// }

// student.study()
// student.address.showAddress()
// student2.study()


// ФУНКЦИЯ-КОНСТРУКТОР
// DRY - Dont Repeat Yourself

// const student1 = {
//     name: 'Konstanstin',
//     class: 'Frontend',
//     study() {
//         console.log(`${this.name} is learning ${this.class}`)
//     }
// }

// const student2 = {
//     name: 'Dauren',
//     class: 'Backend',
//     study: function() {
//         console.log(`${this.name} is learning ${this.class}`)
//     }
// }

// console.log(student1)
// console.log(student2)
// student1.study()
// student2.study()

// function Student(name, _class) {
//     // this = {}
//     this.name = name
//     this.class = _class
//     this.study = function() {
//         console.log(`${this.name} is learning ${this.class}`)
//     }
//     this.getInfo = function() {
//         console.log(`Student name: ${this.name}`)
//         console.log(`Student ${this.name} is now learning ${this.class}`)
//     }

//     // this = {
//     //     name: name,
//     //     class: _class,
//     //     study: function() {} 
//     // }

//     // return this
// }

// const student1 = new Student('Konstantin', 'Frontend')
// const student2 = new Student('Dauren', 'Backend')
// const student3 = new Student('Temirlan', 'QA Engineering')
// const student4 = new Student('Alexey', 'UI/UX Designer')

// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)
// student1.study()
// student2.study()
// student3.study()
// student4.study()

// student1.getInfo()
// student2.getInfo()
// student3.getInfo()
// student4.getInfo()

// ЗАДАНИЕ 1
// function Book(namebook,author,page) {
//     this.name = namebook
//     this.author = author
//     this.page = page
//     this.bookInfo = function() {
//         console.log(`There is a book available ${this.name},${this.author} ${this.page}`)
//     }

// }

// const books1 = new Book('JavaScript','Kali','190')
// const books2 = new Book('Python','Jek','250')
// const books3 = new Book('C++','Djon','432')

// books1.bookInfo()
// books2.bookInfo()
// books3.bookInfo()

// const shopAddresses = shop.map()

// ЗАДАНИЕ 2
// function Shop(name, address) {
//     this.name = name
//     this.address = address
//     this.getInfo = function() {
//         console.log(`${this.name} shop is located at ${this.address}`)
//     }
// }

// const shop1 = new Shop('DNS', 'Astana, Kabanbai Batyr 21')
// const shop2 = new Shop('Mechta', 'Astana, Rakhymzhan Koshkarbayev 15a')

// console.log(shop1, shop2)
// shop1.getInfo()
// shop2.getInfo()

// const shops = [shop1, shop2]
// console.log(shops)

// const shopsAddresses = shops.map(shop => shop.address)
// console.log(shopsAddresses)


// OOP
// Functional
// Procedure

// CLASS
// function Developer(name, language, framework) {
//     this.name = name
//     this.language = language
//     this.framework = framework

//     this.code = function() {
//         console.log(`Developer ${this.name} is now coding!`)
//     }
// }

// class Developer {
//     constructor(name, language, framework) {
//         this.name = name
//         this.language = language
//         this.framework = framework
//     }

//     getInfo() {
//         console.log(`Developer ${this.name} codes in ${this.language} primarily using ${this.framework} framework!`)
//     }

//     code() {
//         console.log(`Developer ${this.name} is now coding!`)
//     }
// }

// class WebDeveloper extends Developer {
//     constructor(name, language, framework, browser) {
//         super(name, language, framework)
//         this.favouriteBrowser = browser
//     }

//     getInfo() {
//         super.getInfo()
//         console.log('He is a web developer!!!')
//     }

//     code() {
//         console.log(`Web developer ${this.name} is now coding using ${this.framework}!`)
//     }
// }

// const developer1 = new Developer('Nurgisa', 'C#', '.Net')
// const developer2 = new Developer('Adiya', 'Java', 'Sprint boot')
// const developer3 = new Developer('Iliyas', 'Python', 'Flask')
// const developer4 = new WebDeveloper('Daniyar', 'Javascipt', 'Angular', 'Microsoft Edge')

// console.log(developer1, developer2, developer3, developer4)
// // developer1.code()
// // developer2.code()
// // developer3.code()
// // developer4.code()

// developer1.getInfo()
// developer2.getInfo()
// developer3.getInfo()
// developer4.getInfo()

// ЗАДАНИЕ 3
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    sum() {
        return this.num1 + this.num2
    }

    mul() {
        return this.num1 * this.num2
    }
}

const userNum1 = +prompt('Введите первое число:')
const userNum2 = +prompt('Введите второн число:')

const calculator1 = new Calculator(userNum1, userNum2)
console.log(calculator1)
console.log(calculator1.sum())
console.log(calculator1.mul())