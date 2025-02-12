/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import moment from 'moment'
import { AddNewTaskBtn, AddNewTaskWrapper } from './AddNewTask.styles'

export const AddNewTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [dueDate, setDueDate] = useState('')

  const addNewTodo = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addNewTask({ dueDate, input }))
    setInput('')
  }

  const today = moment().endOf('day').fromNow();
  const tomorrow = moment().add(1, 'days').format('dddd')

  return (
    <AddNewTaskWrapper onSubmit={addNewTodo}>
      <label htmlFor="newTaskInput" />
      <input
        type="text"
        required
        placeholder="Add new task"
        name="newTaskInput"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <label htmlFor="dueDate" />
      <select name="dueDate" id="dueDate" onChange={(e) => setDueDate(e.target.value)}>
        <option value="" default>Due date:</option>
        <option value={today}>Today</option>
        <option value={tomorrow}>Tomorrow</option>
        <option value="Later">Later</option>
      </select>

      <AddNewTaskBtn type="submit">&#43;</AddNewTaskBtn>
    </AddNewTaskWrapper>
  )
}
