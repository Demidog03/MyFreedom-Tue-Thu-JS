import { buttons } from './data.js'
import Button from './model/button-model.js'
const container = document.getElementById('container')

buttons.forEach(button => {
    const { id, label, user } = button
    console.log(user)
    const newButton = new Button(id, label, user)
    const newButtonDOM = newButton.render()
    container.appendChild(newButtonDOM)
})