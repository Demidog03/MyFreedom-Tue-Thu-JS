export default class Joke {
    constructor() {
        this.text = ''
        this.img = ''
        this.errorMessage = ''
    }

    async getRandomJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const data = await response.json()
            this.text = data.value
            this.img = data.icon_url
            return true
        }
        catch {
            this.errorMessage = 'Error when fetching joke!'
            return false
        }
    }
}