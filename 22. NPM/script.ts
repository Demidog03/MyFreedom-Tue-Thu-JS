import { format, compareAsc } from 'date-fns'
import { fetchTodo, fetchTodoAxios } from './api.js'

// 2025-03-25
const formattedDate = format(new Date(), 'yyyy/MM/dd')
console.log(formattedDate)

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];

console.log(dates.sort(compareAsc)) // ascending order
console.log('Hello')

fetchTodo()
fetchTodoAxios()