import { useState, useEffect } from 'react'

function useFetch () {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    setIsLoading(true)
    setError(false)
    try {
      const raw = await fetch('http://localhost:3000/tasks')
      const data = await raw.json()
      setTasks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  function addTask (task) {
    setTasks([...tasks, task])
  }

  const updateHandler = async (task) => {
    console.log(task)
    const updatedStatus = !task.completed
    task.completed = updatedStatus
    try {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
      const updatedList = tasks.map(currTask => {
        return currTask.id === task.id ? { ...currTask, completed: updatedStatus } : currTask
      })
      setTasks(updatedList)
    } catch (err) { console.error(err) }
  }

  const deleteHandler = async (task) => {
    try {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      const updatedList = tasks.filter(currTask => currTask.id !== task.id)
      setTasks(updatedList)
    } catch (err) { console.error(err) }
  }

  return [
    tasks,
    error,
    isLoading,
    addTask,
    updateHandler,
    deleteHandler
  ]
}

export default useFetch
