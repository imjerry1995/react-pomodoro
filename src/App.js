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
      isPause: false,
      amounts: 4,
      time: {
        min: 0,
        sec: 9
      }
    },{
      id: 2,
      text: 'THE SECOND THING TO DO TODAY',
      isChecked: false,
      isActivated: false,
      isPause: false,
      amounts: 3,
      time: {
        min: '5',
        sec: '00'
      }
    }]; 
    this.state = {
      todos: todos,
      todoText: '' //input 綁定
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidUpdate(prevProps, prepState){
    // console.log('min',this.state.time.min)
    // console.log('sec',this.state.time.sec)
    // prepState.time.min === 0 && prepState.time.sec === 0 && 
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
      isPause: false,
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
  handlePlay(nowTodo){
    const {todos} = this.state
    todos.map(item => { //找出目前的 todo
      if (item.id !== nowTodo) return item
      return item.isPause = !item.isPause //現在圖是否顯示暫停（顯示暫停表示現在在跑）
    })
    const todoSelect = todos.find(item=>{
      return item.id === nowTodo
    })
    let maxTime = todoSelect.time.min * 60 + todoSelect.time.sec //把目前抓到的todo的時間換算成秒數
    const countDown = setInterval(() => {
      maxTime--
      const newTodos = todos.map(item=>{
        if (item !== todoSelect) return item
        return {
          ...item,
          time: {
            min: parseInt(maxTime / 60), 
            sec: maxTime % 60
          }
        }
      })
      this.setState({
        todos: newTodos
      })
      maxTime <= 0 && clearInterval(countDown)
    }, 1000)
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