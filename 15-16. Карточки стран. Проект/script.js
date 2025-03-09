let cardHtml = ''

const cardsContainer = document.getElementById('cardsContainer')

fetch('https://restcountries.com/v3.1/all')
.then(response => {
    return response.json()
})
.then(countries => {
    console.log(countries)

    countries.forEach(country => {
        let languages = ''
        let currencies = ''

        if(country?.languages) {
            languages = Object.values(country.languages).join(', ')
        }

        if(country?.currencies) {
            currencies = Object.values(country.currencies).map(currency => `${currency.symbol} ${currency.name}`).join(', ')
        }

        cardHtml += `
            <div class="card" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.official}</h5>
                    <p class="card-text">${country.continents.join(', ')}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">👨‍👩‍👧‍👦 ${country.population}</li>
                    <li class="list-group-item">🗣️ ${languages}</li>
                    <li class="list-group-item">💰 ${currencies}</li>
                </ul>
            </div>
        `
    })

    cardsContainer.innerHTML = cardHtml
})
.catch(err => {
    console.log(err)
})