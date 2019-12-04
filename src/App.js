import React, {Component} from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'

class App extends Component {
  constructor(props){
    super(props)
    let todos = [{
      id: 1,
      text: 'THE FIRST THING TO DO TODAY',
      isChecked: false,
      isActivated: true,
      amounts: 4
    },{
      id: 2,
      text: 'THE SECOND THING TO DO TODAY',
      isChecked: false,
      isActivated: false,
      amounts: 3
    }]; 
    this.state = {
      todos: todos
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount(){
  //   撈api
  // }

  handleSubmit(){
    alert('OK')
  }

  render(){
    const {todos} = this.state
    // console.log(todos)
    return (
      <div>
        <CreateTodo handleSubmit={this.handleSubmit}/>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default App