import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
  const {todos, handleDelete, handlePlay, show} = props
  if(show){
    return (
    <div className="list__wrapper">
      <div>
        <div className="list__title">TO-DO</div>
        <ul className="list">
          {
            todos.filter(item => !item.isChecked).map((item, index) => {
              return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay} show={true}/>
            })
          }
        </ul>
      </div>
      <div>
        <div className="list__title">DONE</div>
        <ul className="list">
          {
            todos.filter(item => item.isChecked).map((item, index) => {
              return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay} tomo={true}/>
            })
          }
        </ul>
      </div>
    </div>
    )
  }
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