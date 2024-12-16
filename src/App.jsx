import { useEffect, useState } from 'react'
import './App.css'
import Task from './components/Tasks'
import AddTask from './components/AddTask'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
   
  }, [tasks])

  function onCheckTaskClick(taskId){
    const newTasks = tasks.map(task=>{
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task)=> task.id != taskId)
    setTasks(newTasks)
  }

  function onCreateTaskSubmit(title, description){
    const newTask = [
      ...tasks,
      {
      id: uuidv4(),
      title,
      description
    }]

    setTasks(newTask)
  }
  
  return (
    <div className='w-screen h-screen flex justify-center p-6 bg-slate-950'>  
      <div className='w-[500px]'>
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de tarefas
        </h1> 
        <div className='mt-7 space-y-6 pb-20'>
          <AddTask onCreateTask={onCreateTaskSubmit}/>
          <Task tasks={tasks} onTaskClick={onCheckTaskClick} onDeletTask={onDeleteTaskClick} />
        </div>
      </div>
    </div>
  )
}

