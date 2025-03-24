export default class WelcomeText {
    getWelcomeText(dayTime) {
        return `Good ${dayTime}`
    }

    setWelcomeName() {
        localStorage.setItem('welcomeName', welcomeNameInput.value)
    }

    getInitialWelcomeName() {
        return localStorage.getItem('welcomeName')
    }
}