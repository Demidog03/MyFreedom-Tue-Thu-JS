export class User {
    constructor(name, email, phoneNumber) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
    }

    getInfo() {
        console.log(this)
    }
}

// export class Employee {

// }

// { User: User, Employee: Employee }