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
      todos: todos,
      todoText: '' //input 綁定
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // componentDidUpdate(){
  //   console.log('mount',this.state.todos)
  // }

  handleChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit(){
    const {todos, todoText} = this.state
    const newTodo = {
      id: todos.length+1,
      text: todoText,
      isChecked: false,
      isActivated: false,
      amounts: 1
    }
    this.setState({
      todos: [...todos, newTodo],
      todoText: ''
    })
  }

  handleDelete(nowTodo){
    const {todos, todoText} = this.state
    todos.map(item =>{
      if(item.id !== nowTodo) return item
      return item.isChecked = true
    })
    this.setState({
      todos: todos
    })
  }

  render(){
    const {todos, todoText} = this.state
    //console.log(todos)
    return (
      <div>
        <CreateTodo value={todoText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList todos={todos} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App