import React, {Component} from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import PlayButton from './PlayButton'

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
        min: 5,
        sec: 9
      }
    }]; 
    this.state = {
      todos: todos,
      todoText: '', //input 綁定
      nowTask: '' //記錄目前正在倒數的任務
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.stopCountDown = this.stopCountDown.bind(this)
  }

  componentDidUpdate(prevProps, prepState){
    console.log(prepState.todos[0])
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit(){
    this.stopCountDown()
    const {todos, todoText} = this.state
    const newTodo = {
      id: todos.length+1,
      text: todoText,
      isChecked: false,
      isActivated: false,
      isPause: false,
      amounts: 0,
      time: {
        min: 25,
        sec: 0
      }
    }
    this.setState({
      todos: [...todos, newTodo],
      todoText: ''
    })
  }

  handleDelete(nowTodo){
    this.stopCountDown()
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
    this.stopCountDown() //先強制停掉所有計時器
    const {todos} = this.state
    const todoSelect = todos.find(item=>{ //找出目前是哪個 todo，抓裡面的倒數時間
      return item.id === nowTodo
    })
    todoSelect.isPause = !todoSelect.isPause //現在圖是否顯示暫停（顯示暫停表示現在在跑）
    todoSelect.isActivated = !todoSelect.isActivated
    let maxTime = todoSelect.time.min * 60 + todoSelect.time.sec //把目前抓到的todo的時間換算成秒數

    const countDown = setInterval(() => {
      maxTime--
      const newTodos = todos.map(item => { 
        if (item !== todoSelect) {
          return {
            ...item,
            isActivated: false, //其他的觸發都關掉
            isPause: false//其他的強制變暫停
          }
        }
        if (maxTime==0) { //歸零之後
          return {
            ...item,
            isPause: !todoSelect.isPause,
            amounts: todoSelect.amounts+1,
            time: {
              min: 25,
              sec: 0
            }
          }
        }
        return {
          ...item,
          isActivated: todoSelect.isActivated,
          isPause: todoSelect.isPause,
          time: {
            min: parseInt(maxTime / 60),
            sec: maxTime % 60
          }
        }
      })
      this.setState({
        todos: newTodos,
        nowTask: todoSelect
      })
      maxTime <= 0 && clearInterval(countDown)
    }, 1000)
    
    if (!todoSelect.isPause){
      this.stopCountDown() //停掉， state 已經在最新
      this.setState({
        todos: todos,
        nowTask: todoSelect
      })
    }
  }

  //強制結束所有計時器
  stopCountDown(){
    const highestIntervalId = setInterval(";");
    for (var i = 0; i < highestIntervalId; i++) {
      clearInterval(i);
    }
  }

  render(){
    const {todos, todoText, nowTask} = this.state
    //console.log(todos)
    return (
      <div>
        <CreateTodo value={todoText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList todos={todos} handleDelete={this.handleDelete} handlePlay={this.handlePlay} />
        <PlayButton todo={nowTask}  handlePlay={this.handlePlay}/>
      </div>
    )
  }
}

export default App