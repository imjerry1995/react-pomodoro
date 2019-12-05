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
      date: new Date(),
      time: {
        min: '5',
        sec: '00'
      },
      todoText: '' //input 綁定
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidUpdate(){
    console.log('min',this.state.time.min)
    console.log('sec',this.state.time.sec)
  }

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

  //處理播放
  handlePlay(){
    const {time} = this.state
    let maxTime = 10 //最大時間，秒數
    if (maxTime>=0){
      setInterval(() => {
        maxTime--
        this.setState({
          time:{
            min: maxTime/60,
            sec: maxTime % 60
          }
        })
      }, 1000);
    }
  }

  render(){
    const {todos, todoText} = this.state
    //console.log(todos)
    return (
      <div>
        <CreateTodo value={todoText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList todos={todos} handleDelete={this.handleDelete} handlePlay={this.handlePlay}/>
      </div>
    )
  }
}

export default App