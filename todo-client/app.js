const textBoxName = document.getElementById('textBoxName')
const textBoxPriority = document.getElementById('textBoxPriority')
const addTask = document.getElementById('addTask')
const allTasks= document.getElementById('allTasks')
const taskList = document.getElementById('taskList')
const delBtn = document.getElementById('delBtn')
const taskContainer = document.getElementById('taskContainer')

addTask.addEventListener('click', () =>{
    let taskName = textBoxName.value
    let taskPriority = textBoxPriority.value
    let newTask = {task: taskName, priority: taskPriority}

    fetch('http://localhost:8080/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
    .then(result => getTasks())
   
})
getTasks()


async function getTasks(){
    const response = await fetch('http://localhost:8080/todo')
    const taskArray = await response.json()

    let taskItems = taskArray.map(function(result){
        return`
        <div id="taskContainer">
        <h3>Task Item</h3>
        <li>Task: ${result.task}</li>
        <li>Priority: ${result.priority}</li>
        <button id="delBtn">Delete Task</button>
        </div>
        `
    })

    taskList.innerHTML = taskItems.join("")
    
}

// delBtn.addEventListener('click', ()=>{
//     fetch('http://localhost:8080/todo', {
//         method: 'DELETE'

//     })
// })



