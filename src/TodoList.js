import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
  const {todos, handleDelete, handlePlay} = props
  return (
    <ul className="list">
      {
        todos.filter(item => !item.isChecked).map((item, index) => {
          return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay}/>
        })
      }
    </ul>
  )
}

export default TodoList