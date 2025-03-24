// imports
import DateAndTime from "./js/timeAndDate.js";
import WelcomeText from "./js/welcomeText.js";
import Slider from "./js/slider.js";
import Weather from "./js/weather.js";
import Joke from "./js/joke.js";
import MusicPlayer from "./js/musicPlayer.js";

// DOM elements
const welcomeTextTag = document.getElementById('welcomeText')
const welcomeNameInput = document.getElementById('welcomeNameInput')
const sliderPrevBtn = document.getElementById('sliderPrevBtn')
const sliderNextBtn = document.getElementById('sliderNextBtn')
const cityInput = document.getElementById('cityInput')
const weatherIcon = document.getElementById('weatherIcon')
const temperature = document.getElementById('temperature')
const weatherDescription = document.getElementById('weatherDescription')
const wind = document.getElementById('wind')
const humidityEl = document.getElementById('humidityEl')
const weatherError = document.getElementById('weatherError')
const quoteText = document.getElementById('quoteText')
const quoteImg = document.getElementById('quoteImg')
const changeQuoteBtn = document.getElementById('changeQuoteBtn')
const musicPlayIcon = document.getElementById('musicPlayIcon')
const musicPlayPrevIcon = document.getElementById('musicPlayPrevIcon')
const musicPlayNextIcon = document.getElementById('musicPlayNextIcon')

// Date and Time
const dateAndTime = new DateAndTime()
dateAndTime.setCurrentTime()
dateAndTime.setCurrentDate()
const dayTime = dateAndTime.getCurrentDayTime()

// Welcome Text
const welcomeText = new WelcomeText()
welcomeTextTag.innerHTML = welcomeText.getWelcomeText(dayTime)
welcomeNameInput.addEventListener('keyup', () => {
    welcomeText.setWelcomeName()
})
welcomeNameInput.value = welcomeText.getInitialWelcomeName()

// Slider
const slider = new Slider(dayTime)
slider.setInitialImage()
sliderNextBtn.addEventListener('click', () => {
    slider.setNextImage()
})
sliderPrevBtn.addEventListener('click', () => {
    slider.setPrevImage()
})

// Weather
const weather = new Weather()
cityInput.addEventListener('blur', () => {
    fetchWeather()
})
fetchWeather()

async function fetchWeather() {
    const isSuccess = await weather.getWeatherByCity(cityInput.value)
    const { windSpeed, temp, icon, humidity, weatherName, errorMessage } = weather

    if(isSuccess) {
        weatherError.innerText = ''
        weatherIcon.src = icon
        temperature.innerText = temp
        weatherDescription.innerText = weatherName
        wind.innerText = windSpeed
        humidityEl.innerText = humidity
    }
    else {
        weatherError.innerText = errorMessage
        weatherIcon.src = ''
        temperature.innerText = ''
        weatherDescription.innerText = ''
        wind.innerText = ''
        humidityEl.innerText = ''
    }
}


// Jokes
const joke = new Joke()
fetchRandomJoke()
async function fetchRandomJoke() {
    const isSuccess = await joke.getRandomJoke()
    const { img, text, errorMessage } = joke

    if(isSuccess) {
        quoteText.innerText = text
        quoteImg.src = img
    }
    else {
        quoteText.innerText = errorMessage
        quoteImg.src = ''
    }
}

changeQuoteBtn.addEventListener('click', () => {
    fetchRandomJoke()
})


// MusicPlayer
const musicPlayer = new MusicPlayer(['./assets/sounds/Aqua Caelestis.mp3', './assets/sounds/River Flows In You.mp3', './assets/sounds/Summer Wind.mp3', './assets/sounds/Ennio Morricone.mp3'])
musicPlayIcon.addEventListener('click', () => {
    if(musicPlayer.isPaused) {
        musicPlayer.playAudio()
        musicPlayIcon.style.backgroundImage = 'url("./assets/svg/pause.svg")'
    }
    else {
        musicPlayer.pauseAudio()
        musicPlayIcon.style.backgroundImage = 'url("./assets/svg/play.svg")'
    }
})

musicPlayPrevIcon.addEventListener('click', () => {
    musicPlayer.playPrevAudio()
})

musicPlayNextIcon.addEventListener('click', () => {
    musicPlayer.playNextAudio()
})