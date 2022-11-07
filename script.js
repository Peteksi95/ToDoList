const addTaskBtn = document.getElementById("addtask")
const addTaskText = document.getElementById("addtasktext")
const clearAll = document.getElementById("clearall")

let tasks = document.getElementById("tasks")

addTaskText.focus()

addTaskBtn.addEventListener("click", function() {
    createListItem()
    setTimeout(() => {addTaskText.value =""}, 10)
})

function createListItem() {
    let task = document.createElement("li")
    let editBtn = document.createElement("button")
    let deleteBtn = document.createElement("button")
    task.classList.add("li")
    editBtn.classList.add("edit")
    deleteBtn.classList.add("delete")
    editBtn.innerText = "EDIT"
    deleteBtn.innerText = "DELETE"
    task.appendChild(document.createTextNode(addTaskText.value))
    task.appendChild(editBtn)
    task.appendChild(deleteBtn)
    tasks.appendChild(task)

    deleteBtn.addEventListener("click", () => {
        task.remove()
    })

    editBtn.addEventListener("click", () => {
        let editText = document.createElement("input")
        editText.classList.add("edit-text")
        editBtn.remove()
        let confirmBtn = document.createElement("button")
        confirmBtn.classList.add("confirm")
        confirmBtn.innerText = "CONFIRM"
        task.appendChild(editText)
        task.appendChild(confirmBtn)

        confirmBtn.addEventListener("click", () => {
            task.innerText = editText.value
            task.appendChild(editBtn)
            task.appendChild(deleteBtn)
        })
    })

    clearAll.addEventListener("click", () => {
        task.remove()
    })
}