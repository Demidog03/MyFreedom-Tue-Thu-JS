export default class Button {
    constructor(id, label, user) {
        this.id = id
        this.label = label
        this.user = user
    }

    onClick() {
        // this -> {} -> без bind
        // this -> Button {id, label, user} -> с bind
        console.log(this.user.name)
    }

    render() {
        const button = document.createElement('button') // <button></button>
        button.id = this.id // <button id="какой то id"></button>
        button.innerText = this.label // <button id="какой то id">Текст кнопки</button>
        button.addEventListener('click', this.onClick.bind(this))
        return button
    }
}