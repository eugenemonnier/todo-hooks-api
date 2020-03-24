import React, { useState } from 'react'

export default function ToDo () {
  const [taskText, setTaskInput] = useState('')
  const [assignToText, setAssignToInput] = useState('')
  const [dificultyTaskItem, setDifficulty] = useState('')
  const [currStatus] = useState('Really? Not done still?')
  const [taskList, setTaskList] = useState([])

  const submitHandler = event => {
    event.preventDefault()
    if (taskText || assignToText || dificultyTaskItem) {
      setTaskList([...taskList, { taskText, assignToText, dificultyTaskItem, currStatus }])
      event.target.reset()
      setTaskInput('')
      setAssignToInput('')
      setDifficulty('')
    }
  }

  const taskHandler = event => {
    setTaskInput(event.target.value)
  }

  const assignedToHandler = event => {
    setAssignToInput(event.target.value)
  }

  const difficultyHandler = event => {
    setDifficulty(event.target.value)
  }

  function toggleButton (index) {
    const currentStatus = document.getElementById(`index${index}`)
    if (currentStatus.innerText === 'Really? Not done still? ') {
      currentStatus.innerText = 'Took you long enough! '
    } else {
      currentStatus.innerText = 'Really? Not done still? '
    }
  }

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label> Task: </label>
        <input type='text' onChange={taskHandler} placeholder='Stop slacking! You better get to it!' />
        <label> Assigned to: </label>
        <input type='text' onChange={assignedToHandler} placeholder="Don't look at me. You're doing this!" />
        <label> Don't act like this shit is hard.(1 to 5) </label>
        <input type='number' onChange={difficultyHandler} min='1' max='5' />
        <input type='submit' value='Hop to it!' />
      </form>
      <h3>These should have been done yesterday!</h3>
      <ol>
        {taskList.map((taskitem, index) => (
          <li key={index}>
            <span>{taskitem.taskText} </span>
            <span>{taskitem.assignToText} </span>
            <span>{taskitem.dificultyTaskItem} </span>
            <span id={`index${index}`}>{taskitem.currStatus} </span>
            <button onClick={() => { toggleButton(index) }}> Is it done yet? </button>
          </li>
        ))}
      </ol>
    </section>
  )
}
