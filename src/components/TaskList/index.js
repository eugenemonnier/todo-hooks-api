// third party dependecies
import React, { useContext } from 'react'
import { Alert, Spinner, Table, Button } from 'react-bootstrap'
import { ThemeContext } from '../../context'

function TaskList ({ tasks, error, isLoading, mode, updateHandler, deleteHandler }) {
  const theme = useContext(ThemeContext)
  return (
    <div className='Spellbook'>
      <div>currently in {mode} mode</div>
      {error && <Alert variant='danger'>{error}</Alert>}
      {isLoading
        ? (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          <Table variant={theme.darkMode ? 'dark' : 'light'} striped bordered size="sm">
            <thead>
              <tr>
                <th>Task</th>
                <th>Assigned To</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.description}</td>
                  <td>{task.assigned}</td>
                  <td>{task.difficulty}</td>
                  <td><Button onClick={() => updateHandler(task)}>{task.completed ? 'Still not done?' : 'About damn time!'}</Button></td>
                  <td><Button variant='outline-danger' onClick={() => deleteHandler(task)}>Slacker's Way Out</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
    </div>
  )
}

export default TaskList
