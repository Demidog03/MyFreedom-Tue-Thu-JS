// ПРИЦИПЫ ООП
// 1. Abstraction - Абстракция !== Абстрактные классы (abstract)
// Скрываем детали и оставляем лишь важные свойства, методы.
// class Human {
//     constructor(name) {
//         this.name = name
//         this.speed = '0 m/s'
//     }

//     walk() {
//         this.speed = '5 m/s'
//     }

//     run() {
//         this.speed = '11 m/s'
//     }
// }

// const human1 = new Human('Iliyas')
// console.log(human1)
// human1.walk()
// human1.run()

// const numbers = [12, 45, 23, 65]
// numbers.forEach(num => { // Абстракция

// })
// numbers.reduce()


// 2. Inheritance - Наследование
// class Human {
//     constructor(name) {
//         this.name = name
//         this.speed = '0 m/s'
//     }

//     walk() {
//         this.speed = '5 m/s'
//     }

//     run() {
//         this.speed = '11 m/s'
//     }
// }

// class Cook extends Human {
//     cook() {
//         console.log('Let him cook!!!')
//     }
// }

// class SeniorCook extends Cook {
//     cookLikeSenior() {
//         console.log('LET HIM COOK PROFESSIONALLY!!!')
//     }
// }

// const human1 = new Human('Daniyar')
// const cook1 = new Cook('Temirlan')
// const seniorCook1 = new SeniorCook('Konstantin')

// console.log(human1)
// console.log(cook1)
// console.log(seniorCook1)
// human1.run()
// human1.walk()
// cook1.run()
// cook1.walk()
// // human1.cook() -> не может готовить еду
// cook1.cook()


// 3. Polymorphism - Полиморфизм - Переписать метод родительского класса
// class Coder {
//     constructor(name) {
//         this.name = name
//     }

//     code() {
//         console.log(`${this.name} is coding!`)
//     }
// }

// class JavaCoder extends Coder {
//     code() {
//         console.log(`${this.name} is coding with Java!`)
//     }
// }

// const coder1 = new Coder('Tomiris')
// coder1.code()

// const coder2 = new JavaCoder('Adiya')
// coder2.code()


// 4. Incapsulation - Инкапсуляция - Защищать
// class KaspiGold {
//     // #balance = 0 // приватное поле - только в рамках этого класса
//     _balance = 0 // protected поле - в рамках этого класса и дочерних
//     // readonly balance = 0 // не позволяет менять нигде - this.balance = 20 не будет работать нигде
    
//     constructor(name) {
//         this.owner = name
//     }

//     getSalary(companyName, amount) {
//         console.log(`From company "${companyName}" payment received in amount ${amount} kzt`)
//         console.log('Comment: Заработная плата')
//         this._balance = this._balance + amount
//     }
// }

// class KaspiRed extends KaspiGold {
//     getCredit() {
//         super._balance = 1000000
//     }
// }

// const user1 = new KaspiGold('Dauren')
// // user1.#balance = 10000000 - нельзя
// user1.getSalary('BI Group', 800000)
// console.log(user1)

// const user2 = new KaspiRed('Olzhas')
// // user2._balance = 20 - лучше так не делать
// user2.getCredit()
// console.log(user2)


// SOLID
// Single Responsibility principle - Принцип одной ответственности
// Делай то что умеешь и можешь, и не больше

// ПРИМЕР 1
// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     calculateArea() {
//         return this.width * this.height
//     }
// }

// class Circle {
//     constructor(radius) {
//         this.pi = 3.14
//         this.radius = radius
//     }

//     calculateCircleArea() {
//         return this.pi * this.radius ** 2
//     }
// }

// class AreaPrinter {
//     print(area) {
//         console.log(`Площадь фигуры: ${area}`)
//     }
// }

// const rectangle1 = new Rectangle(200, 300)
// const rectangleArea = rectangle1.calculateArea()

// const areaPrinter = new AreaPrinter()
// areaPrinter.print(rectangleArea)

// const circle1 = new Circle(20)
// const circleArea = circle1.calculateCircleArea()
// areaPrinter.print(circleArea)

// ПРИМЕР 2
// class User {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }

//     getInfo() {
//         console.log(`Email: ${this.email}, name: ${this.name}`)
//     }
// }

// class UserRepository {
//     save(user) {
//         const allUsers = JSON.parse(localStorage.getItem('users'))
//         if(allUsers?.length) {
//             if(allUsers.some(u => u.email === user.email)) {
//                 console.log('Пользователь уже есть в базе!')
//                 return
//             }
//             localStorage.setItem('users', JSON.stringify([...allUsers, user]))
//         }
//         else {
//             localStorage.setItem('users', JSON.stringify([user]))
//         }
        
//         console.log(`Сохраняем в базу пользователя ${user.name}`)
//     }
//     delete(user) {
//         const allUsers = JSON.parse(localStorage.getItem('users')) // [{name: 'Daniyar', email: 'Daniyar@gmai.com'}]
//         if(allUsers?.length) {
//             const updatedUsers = allUsers.filter(u => u.email !== user.email) // []
//             localStorage.setItem('users', JSON.stringify(updatedUsers))
//         }
//         console.log(`Удаление пользователя ${user.name} с базы!`)
//     }
// }

// class EmailService {
//     sendWelcomeEmail(email) {
//         console.log(`Отправляем email на ${email}`)
//     }
// }

// const user1 = new User(`Dauren`, 'dauren@gmail.com')
// user1.getInfo()

// const user2 = new User('Daniyar', 'daniyar@gmail.com')

// const userRep = new UserRepository()
// userRep.save(user1)
// userRep.save(user2)
// userRep.delete(user1)

// const emailService = new EmailService()
// emailService.sendWelcomeEmail(user1.email)
// emailService.sendWelcomeEmail(user2.email)


// Open-Closed Principle - Принцип открытости-закрытости
// Делай так чтобы потом не жалеть
// Открытый к дополнению но закрытый к изменениям


// class Payment {
//     constructor(amount) {
//         this.amount = amount
//     }

//     pay() {
//         console.log(`Оплата товара с ценой: ${this.amount}`)
//     }
// }

// class CashPayment extends Payment {
//     pay() {
//         super.pay()
//         console.log('Товар оплачен наличными!')
//     }
// }

// class CardPayment extends Payment {
//     pay() {
//         super.pay()
//         console.log('Товар оплачен картой!')
//     }
// }

// const payment1 = new Payment(200000)
// const payment2 = new CashPayment(200000)
// const payment3 = new CardPayment(400000)
// payment1.pay()
// payment2.pay()
// payment3.pay()


// Liskov Substitution Principle
// Айтишник не обязан писать код

// class ITSpecialist {
//     constructor(name) {
//         this.name = name
//     }

//     work() {
//         console.log(`${this.name} работает!`)
//     }
// }

// class FrontendDeveloper extends ITSpecialist {
//     work() {
//         super.work()
//         console.log(`${this.name} пишет код!`)
//     }
// }

// class ProjectManager extends ITSpecialist {
//     work() {
//         super.work()
//         console.log(`${this.name} создает задачи!`)
//     }
// }

// const frontendDeveloper = new FrontendDeveloper('Nurgisa')
// frontendDeveloper.work()

// const projectManager = new ProjectManager('Iliyas')
// projectManager.work()



// Interface Segregation Principle
// class FlyingBird {
//     fly() {
//         console.log('Я лечу')
//     }
// }

// class SwimmingBird {
//     swim() {
//         console.log('Я плаваю')
//     }
// }

// class Duck extends FlyingBird {

// }

// class Penguin extends SwimmingBird {

// }



// Dependency Inversion Principle
// Ты можешь делать как хочешь, что хочешь

// class User {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
// }

// class UserRepository {
//     constructor(database) {
//         this.database = database
//     }

//     saveUser(user) {
//         this.database.save(user)
//     }
// }

// class PostgreSQLDatabase {
//     save(user) {
//         // Логика сохранения в PostgreSQL
//         console.log(`Сохраняем юзера ${user.name} в PostgreSQL!`)
//     }
// }

// class MongoDBDatabase {
//     save(user) {
//         // Логика сохранения в MongoDB
//         console.log(`Сохраняем юзера ${user.name} в MongoDB!`)
//     }
// }

// class MySQLDatabase {
//     save(user) {
//         // Логика сохранения в MySQLDatabase
//         console.log(`Сохраняем юзера ${user.name} в MySQLDatabase!`)
//     }
// }

// const user1 = new User('Tomiris')

// const postgreSql = new PostgreSQLDatabase()
// const mongoDB = new MongoDBDatabase()
// const mySQL = new MySQLDatabase()

// const userRep = new UserRepository(postgreSql)
// userRep.saveUser(user1)