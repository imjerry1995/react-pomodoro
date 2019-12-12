import React, {Component} from 'react'
import PlayButton from './PlayButton'
import { Link } from 'react-router-dom'

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
    const {id, text, isChecked, isActivated, isPause, amounts, min, sec} = this.props.todo
    const {count, todo, handlePlay, show, tomo} = this.props
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
        {isActivated && <div className="list-item__time">{min<10 ? '0'+min:min}:{sec<10 ? '0'+sec:sec}</div>}
        {!isActivated && <PlayButton todo={todo} handlePlay={handlePlay}/>}
        
        {/*底下是第二頁的內容*/}
        {show && 
        
          <div className="play-button">
            < Link to = "/" >
            <button className="list-item__btn list-item__btn--small">▶︎</button>
            </Link>
          </div>
        
        }

        {tomo &&
          < ul className = "list-item__amount-list list-item__amount-list--done" >
            {list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>
        }
      </li>
    )
  }
}

export default Todo