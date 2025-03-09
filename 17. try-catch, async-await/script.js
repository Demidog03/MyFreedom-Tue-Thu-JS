// XMLHttpRequest
// const httpsRequest = new XMLHttpRequest()
// httpsRequest.open('GET', 'https://jsonplaceholder.org/users')
// httpsRequest.send()
// httpsRequest.onload = userFetchingOnLoad
// httpsRequest.onerror = userFetchinOnError

// function userFetchingOnLoad() {
//     const data = JSON.parse(httpsRequest.response)
//     console.log(data)
// }

// function userFetchinOnError() {
//     console.log('Error')
// }

// Fetch - попробуйте сами
// fetch('https://jsonplaceholder.org/users')
// .then(response => response.json())
// .then(users => {
//     const firstUser = users[0]

//     fetch(`https://jsonplaceholer.org/users/${firstUser.id}`)
//     .then(response => response.json())
//     .then(user => { // callback-hell
//         console.log(user)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('FINALY')
// })

// ASYNC/AWAIT
// async function fetchUsers() {
//     try {
//         const response1 = await fetch('https://jsonplaceholder.org/users')
//         const users = await response1.json()
    
//         const firstUser = users[0]
    
//         const response2 = await fetch(`https://jsonplaceholder.org/users/${firstUser.id}`)
//         const user = await response2.json()
    
//         console.log(users)
//         console.log(user)
//     }
//     catch(err) {
//         console.log(err)
//     }
//     finally {
//         console.log('FINALLY')
//     }
// }

// fetchUsers()


// try {
//     const userJSON = `
//         {
//             "name": "Olzhas",
//             "age": 21,
//         }
//     `

//     const userObject = JSON.parse(userJSON)
//     console.log(userObject)
// }
// catch(err) {
//     console.log("Ошибка при парсинге JSON")
//     console.log(err)
// }


// ЗАДАНИЕ 1
const usersList = document.getElementById('usersList')

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.org/users')
        const users = await response.json()

        let usersHtml = ''
        users.forEach(user => {
            usersHtml = usersHtml + `<li>${user.firstname} ${user.lastname}</li>`
        })
        
        usersList.innerHTML = usersHtml
    }
    catch(err) {
        alert('Fetchin user error!')
    }
}

fetchUsers()