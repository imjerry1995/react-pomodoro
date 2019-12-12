import React, {Component} from 'react'
import PlayButton from './PlayButton'

class Todo extends Component{
  constructor(props){
    super(props)

    this.delete = this.delete.bind(this)
  }

  delete(){
    const {todo, handleDelete} = this.props
    handleDelete(todo.id)
  }

  render(){
    const {id, text, isChecked, isActivated, isPause, amounts, time} = this.props.todo
    const {count, todo, handlePlay} = this.props
    let list = []
    for(let i=0;i<amounts;i++){
      list.push(``)
    }
    return (
      <li data-id={count+1} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
        <button className={`list-item__checked ${isActivated ? 'list-item__checked--active':''}`} onClick={this.delete}></button>
        <div className="list-item__infos">
          <h3 className="list-item__text">{text}</h3>
          {isActivated && <ul className="list-item__amount-list">
            {list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>}
        </div>
        {isActivated && <div className="list-item__time">{time.min<10 ? '0'+time.min:time.min}:{time.sec<10 ? '0'+time.sec:time.sec}</div>}
        {!isActivated && <PlayButton todo={todo} handlePlay={handlePlay}/>}
      </li>
    )
  }
}

export default Todo