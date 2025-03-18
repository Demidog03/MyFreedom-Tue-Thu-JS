class Task {
    constructor(title) {
        this.title = title
        this.status = 'in process'
    }

    finishTask() {
        this.status = 'finished'
    }

    resetTask() {
        this.status = 'in process'
    }
}

module.exports = Task

// кнопка которая позволяет выбрать нужный статус
// кнопки отдельные закончит задачу и сбросить задачу