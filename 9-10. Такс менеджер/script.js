const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click', () => {
    const taskName = taskInput.value

    const liTemplate = document.getElementById('liTemplate')
    const liTemplateClone = liTemplate.content.cloneNode(true)
    const newLiTag = liTemplateClone.getElementById('liTag')

    const liLabel = liTemplateClone.getElementById('liLabel')
    liLabel.innerText = taskName 

    const liCheckbox = liTemplateClone.getElementById('liCheckbox')
    liCheckbox.addEventListener('click', () => {
        newLiTag.classList.toggle('list-group-item-success')
    })

    const liDeleteBtn = liTemplateClone.getElementById('liDeleteBtn')
    liDeleteBtn.addEventListener('click', () => {
        newLiTag.remove()
    })

    taskList.appendChild(newLiTag)

    taskInput.value = ''
})