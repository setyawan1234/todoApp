import React from 'react'
import PropTypes from "prop-types"
import Button from './Button'

const TodoItem = ({todo,hapus,buka}) => {
  const hapusById = id => {
    hapus(id)
  }
  return (
    <div style={todoItem}>
      <p>{todo.tittle}</p>
      <div>
        <Button text="Edit" variants="success" action={() => buka(todo.id, todo.tittle)}/>
        <Button text="Delete" variants="warning" action={() =>hapusById(todo.id)}/>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
  hapus: PropTypes.func
}

export default TodoItem

const todoItem = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
  borderRadius:"5px"
}