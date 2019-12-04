import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component{
  render(){
    const {todos} = this.props
    return (
      <div>
        {todos.map((item,index) => {
          return <Todo key={index} todo={item} />
        })}
      </div>
    )
  }
}

export default TodoList