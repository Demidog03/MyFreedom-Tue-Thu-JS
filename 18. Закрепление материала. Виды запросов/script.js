const userList = document.getElementById('userList')
const cardContainer = document.getElementById('cardContainer')

async function fetchUsers() {
    const response = await fetch('https://dummyjson.com/users?limit=10')
    const data = await response.json()
    console.log(data)

    if(data?.users?.length > 0) {
        data.users.forEach(user => {
            const aTag = document.createElement('a')
            aTag.href = '#'
            aTag.className = 'user-list-item list-group-item list-group-item-action'
            aTag.innerText = `${user.firstName} ${user.lastName}`

            aTag.addEventListener('click', () => {
                const cardHtml = `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${user.username}</h6>
                            <p class="card-text">Country: ${user.address.country}. State: ${user.address.state}. City: ${user.address.city}. Postal code: ${user.address.postalCode}</p>
                            <a href="mailto:${user.email}" class="card-link">Send email</a>
                        </div>
                    </div>
                `

                cardContainer.innerHTML = cardHtml

                const usersTags = document.querySelectorAll('.user-list-item')
                usersTags.forEach(userTag => {
                    userTag.classList.remove('active')
                })
                aTag.classList.add('active')
            })

            userList.appendChild(aTag)
        })
    }
}

fetchUsers()