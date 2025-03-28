import axios from 'axios'

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     console.log(httpRequest.response)
// }

export async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)
    }
    catch {
        console.log('Error!')
    }
}

export async function fetchTodoAxios() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data)
    }
    catch {
        console.log('Error!')
    }
}