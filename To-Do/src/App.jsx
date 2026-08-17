import React, { useState } from 'react'

const App = () => {

  const [Task,setTask] = useState("")
  const [Tasks,setTasks] = useState([])

  function AddTask(){
    setTasks ([...Tasks,Task])
    setTask("")
  }

  function DeleteTask(index){
    const NewTask = Tasks.filter((_,i)=> i !== index)
    setTasks(NewTask)
  }

  return (
    <div>
        <input type="text" placeholder='Enter Task Name' value={Task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={AddTask}>Add Task</button>

      <ul>
        {
          Tasks.map((Task,index)=>(
           
            <li key={index}>
              {Task} 
              <button onClick={()=> DeleteTask(index)}>Delete</button>
            </li> 
          ))
        }
      </ul>   

    </div>
  )
}

export default App
