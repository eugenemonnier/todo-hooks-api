import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css'

import ThemeToggler from '../ThemeToggler'
import Header from '../Header'
import NewTask from '../NewTask'
import TaskList from '../TaskList'
import Footer from '../Footer'

import useFetch from '../../hooks/useFetch'
import Theme from '../../context'

function App () {
  const [tasks, isLoading, error, addTask, updateHandler, deleteHandler] = useFetch()

  return (
    <Theme>
      <Container className='App'>
        <ThemeToggler />
        <Header />
        <NewTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
          error={error}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
        <Footer />
      </Container>
    </Theme>
  )
}

export default App
