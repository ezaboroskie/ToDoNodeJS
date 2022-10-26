
let todo = []

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.get('/todo', (req,res)=>{
    res.json(todo)
})

app.post('/todo', (req,res)=>{
    const todoTask = {task:req.body.task, priority:req.body.priority, id:todo.length+1}
    todo.push(todoTask)
    res.json({message:'New task has been added!'})
    
})

app.delete('/todo/:taskId', (req,res)=>{
    const taskId=parseInt(req.params.taskId)
})

app.listen(8080, function(){
    console.log('Server is running...')
})

// NOT CONNECTED TO OUR NODE/EXPRESS CODE ABOVE 
/*
const tasks = [{id: 1, title: 'Mow lawn'}, {id: 2, title: 'Clean car'}]
const idToDelete = 2 

// delete or remove the task whose id is idToDelete (2)
// HINTS: splice/filter
*/
