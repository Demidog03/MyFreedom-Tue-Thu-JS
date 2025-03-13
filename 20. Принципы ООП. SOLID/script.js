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
class KaspiGold {
    // #balance = 0 // приватное поле - только в рамках этого класса
    _balance = 0 // protected поле - в рамках этого класса и дочерних
    // readonly balance = 0 // не позволяет менять нигде - this.balance = 20 не будет работать нигде
    
    constructor(name) {
        this.owner = name
    }

    getSalary(companyName, amount) {
        console.log(`From company "${companyName}" payment received in amount ${amount} kzt`)
        console.log('Comment: Заработная плата')
        this._balance = this._balance + amount
    }
}

class KaspiRed extends KaspiGold {
    getCredit() {
        super._balance = 1000000
    }
}

const user1 = new KaspiGold('Dauren')
// user1.#balance = 10000000 - нельзя
user1.getSalary('BI Group', 800000)
console.log(user1)

const user2 = new KaspiRed('Olzhas')
// user2._balance = 20 - лучше так не делать
user2.getCredit()
console.log(user2)