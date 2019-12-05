import React, {Component} from 'react'

class Todo extends Component{
  constructor(props){
    super(props)

    this.delete = this.delete.bind(this)
    this.play = this.play.bind(this)
    //this.pause = this.pause.bind(this)
  }

  delete(){
    const {todo, handleDelete} = this.props
    handleDelete(todo.id)
  }

  play(){
    const {todo, handlePlay} = this.props
    handlePlay(todo.id)
  }

  // pause(){
  //   const {todo, handlePause} = this.props
  //   handlePause(todo.id)
  // }

  render(){
    const {id, text, isChecked, isActivated, isPause, amounts, time} = this.props.todo
    let list = []
    for(let i=0;i<amounts;i++){
      list.push(``)
    }
    return (
      <div data-id={id} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
        <button className="list-item__checked" onClick={this.delete}></button>
        <div className="list-item__text">{text}</div>
        <ul className="list-item__amount-list">
          {list.map((item, index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
        {isActivated && <div className="list-item__time">{time.min<10 ? '0'+time.min:time.min}:{time.sec<10 ? '0'+time.sec:time.sec}</div>}
        {/* <button onClick={isPause ? this.pause : this.play}>></button> */}
        <button onClick={this.play}>></button>
      </div>
    )
  }
}

export default Todo