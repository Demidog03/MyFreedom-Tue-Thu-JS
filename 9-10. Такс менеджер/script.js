const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

renderLocalStorageTasks()

addBtn.addEventListener('click', () => {
    const taskName = taskInput.value

    // Работа с localStorage
    const newTask = {
        // 2-решение - Создание уникального id задачи
        id: Math.random(),
        name: taskName,
        status: 'in-progress'
    }

    let allTasks = JSON.parse(localStorage.getItem('tasks'))

    if(allTasks) {
        // 1-решения
        // проверка на одинаковые названия задач
        if(allTasks.some(task => task.name === taskName)) {
            alert('Task with this name is already exists!')
            return
        }
        allTasks.push(newTask)
    }
    else {
        allTasks = [newTask]
    }

    localStorage.setItem('tasks', JSON.stringify(allTasks))
    
    addTaskToHtml(taskName, newTask.id)
    taskInput.value = ''
})

function renderLocalStorageTasks() {
    const allTasks = JSON.parse(localStorage.getItem('tasks'))

    if(allTasks) {
        allTasks.forEach(task => {
            addTaskToHtml(task.name, task.id, task.status)
        })
    }
}

function addTaskToHtml(taskName, id, status) {
    const liTemplate = document.getElementById('liTemplate')
    const liTemplateClone = liTemplate.content.cloneNode(true)
    const newLiTag = liTemplateClone.getElementById('liTag')

    const liLabel = liTemplateClone.getElementById('liLabel')
    liLabel.innerText = taskName

    const liCheckbox = liTemplateClone.getElementById('liCheckbox')

    // первоначальный статус задачи из localStorage
    if(status === 'done') {
        newLiTag.classList.add('list-group-item-success')
        liCheckbox.checked = true
    }

    liCheckbox.addEventListener('click', () => {
        newLiTag.classList.toggle('list-group-item-success')

        const allTasks = JSON.parse(localStorage.getItem('tasks'))
        const foundTask = allTasks.find(task => task.id === id)
        // Проверяем на наличие класса list-group-item-success
        if(newLiTag.classList.contains('list-group-item-success')) {
            foundTask.status = 'done'
        }
        else {
            foundTask.status = 'in-progress'
        }
        localStorage.setItem('tasks', JSON.stringify(allTasks))
    })

    const liDeleteBtn = liTemplateClone.getElementById('liDeleteBtn')
    liDeleteBtn.addEventListener('click', () => {
        newLiTag.remove()

        let allTasks = JSON.parse(localStorage.getItem('tasks'))
        allTasks = allTasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(allTasks))
    })

    taskList.appendChild(newLiTag)
}