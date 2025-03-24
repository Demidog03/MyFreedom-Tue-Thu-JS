export default class Slider {
    constructor(dayTime) {
        this.dayTime = dayTime
        this.imageNumber = 1
    }

    setInitialImage() {
        let randomNumber = Math.round(Math.random() * 20) // 0 -> 1 => 1 * 20 = 20
        // Math.round() -> 0.2 = 0, 0.6 = 1, 4.4 -> 4
        // Math.floor() -> 0.2 = 1, 0.6 = 1, 4.4 -> 5
        if(randomNumber === 0) {
            randomNumber = 1
        }
        if(this.dayTime === 'day') {
            dayTime = 'afternoon'
        }

        this.imageNumber = randomNumber
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.dayTime}/${this.imageNumber < 10 ? '0' + this.imageNumber : this.imageNumber}.jpg')`
    }

    setNextImage() {
        this.imageNumber += 1

        if(this.imageNumber > 20) {
            this.imageNumber = 1
        }
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.dayTime}/${this.imageNumber < 10 ? '0' + this.imageNumber : this.imageNumber}.jpg')`
    }

    setPrevImage() {
        this.imageNumber -= 1

        if(this.imageNumber < 1) {
            this.imageNumber = 20
        }
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.dayTime}/${this.imageNumber < 10 ? '0' + this.imageNumber : this.imageNumber}.jpg')`
    }
}