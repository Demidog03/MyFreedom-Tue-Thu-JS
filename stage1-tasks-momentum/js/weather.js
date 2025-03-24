export default class Weather {
    constructor() {
        this.icon = ''
        this.temp = ''
        this.weatherName = ''
        this.windSpeed = ''
        this.humidity = ''
        this.errorMessage = ''
    }

    async getWeatherByCity(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a94d0a5ac08570add4b47b8da933f247&units=metric`)
            const data = await response.json()
            const currentWeather = data.list[0]
            this.icon = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
            this.temp = currentWeather.main.temp + '°C'
            this.weatherName = currentWeather.weather[0].main
            this.windSpeed = 'Wind speed: ' + currentWeather.wind.speed + 'm/s'
            this.humidity = 'Humidity: ' + currentWeather.main.humidity + '%'
            this.errorMessage = null
            return true
        }
        catch {
            this.clearWeather()
            this.errorMessage = 'Error when fetching weather!'
            return false
        }
    }

    clearWeather() {
        this.icon = null
        this.temp = null
        this.weatherName = null
        this.windSpeed = null
        this.humidity = null
        this.errorMessage = null
    }
}