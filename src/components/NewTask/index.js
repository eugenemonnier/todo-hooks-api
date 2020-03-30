// third party dependecies
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'

function NewTask ({ addTask }) {
  async function postNewTask () {
    const raw = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const response = await raw.json()
    addTask(response)
  }

  const [
    submitHandler,
    changeHandler,
    textHandler,
    values
  ] = useForm(postNewTask)

  return (
    <div className='NewTask'>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId={submitHandler}>
          <Form.Label> Task: </Form.Label>
          <Form.Control
            type='text'
            name='description'
            placeholder='Stop slacking! You better get to it!'
            {...textHandler}
          />
          <Form.Label> Assigned to: </Form.Label>
          <Form.Control
            type='text'
            name='assigned'
            placeholder="Don't look at me. You're doing this!"
            {...textHandler}
          />
          <Form.Label> Don't act like this shit is hard.(1 to 5) </Form.Label>
          <Form.Control
            type='number'
            name='difficulty'
            onChange={changeHandler} min='1' max='5'
          />
        </Form.Group>
        <Button type='submit'>Hop to it!</Button>
      </Form>
    </div>
  )
}

export default NewTask
