import { User } from './models/user-model.js'
import EmailService from './services/email-service.js'
import { getRandomNumber } from './utils.js'
import { PI } from './constants.js'


const user1 = new User('Sayat', 'sayat@gmail.com', 87777777777)
console.log(user1)
const emailService = new EmailService()
emailService.sendEmail(user1.email)

const randomNumber = getRandomNumber()
console.log(randomNumber)

console.log(PI)