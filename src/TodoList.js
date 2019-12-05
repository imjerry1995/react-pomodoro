import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
  const {todos, handleDelete, handlePlay} = props
  return (
    <div>
      {todos.map((item,index) => { //map 慣用寫法
        if(!item.isChecked){ //未完成的才顯示
          return <Todo key={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay}/>
        } 
      })}
    </div>
  )
}

export default TodoList