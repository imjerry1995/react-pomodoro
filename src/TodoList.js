import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component{
  render(){
    const {todos, handleDelete} = this.props
    return (
      <div>
        {todos.map((item,index) => { //map 慣用寫法
          if(!item.isChecked){
            return <Todo key={index} todo={item} handleDelete={nowTodo => handleDelete(nowTodo)}/>
          } 
        })}
      </div>
    )
  }
}

export default TodoList